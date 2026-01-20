# NestJS Boolean Transformation Guide

When using `ValidationPipe` with `transform: true` in NestJS, query parameters (which are strings by nature) can cause unexpected behavior with boolean types.

## 1. The Default Problem

By default, query string parameters are always **strings**.

If your URL is: `?isActive=false`

```typescript
export class QueryDto {
  @IsBoolean()
  isActive: boolean;
}
```

- **Without Transform**: `isActive` is the string `"false"`. The `@IsBoolean()` validator will **fail** because a string is not a boolean.
- **With Transform**: Nest sees the type `boolean`, but simply assigning `"false"` (string) to a boolean variable doesn't make it the boolean `false`. In JavaScript, any non-empty string is "truthy".

---

## 2. Solution A: `enableImplicitConversion`

In your `main.ts`, if you enable this setting, Nest will try to guess the type and convert it properly.

```typescript
// main.ts
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true, // This helps with simple types
    },
  }),
);
```

**Behavior**: `"true"` becomes `true`, and `"false"` becomes `false`.

---

## 3. Solution B: Using `@Type()` (Most Explicit)

Using `class-transformer` decorators directly in your DTO is the safest way to ensure conversion happens correctly.

```typescript
import { Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class QueryDto {
  @Type(() => Boolean) // Explicitly cast the incoming string to a Boolean
  @IsBoolean()
  isActive: boolean;
}
```

---

## 4. Solution C: Using `@Transform()` (Custom Logic)

If you want to handle "truthy" values like `1`, `0`, `"yes"`, or `"no"`, use the `@Transform` decorator.

```typescript
import { Transform } from 'class-transformer';

export class QueryDto {
  @Transform(({ value }) => {
    if (value === 'true' || value === '1') return true;
    if (value === 'false' || value === '0') return false;
    return value;
  })
  @IsBoolean()
  isActive: boolean;
}
```

## Summary Table

| Input URL       | Type in DTO                     | Result            |
| :-------------- | :------------------------------ | :---------------- |
| `?active=false` | `string`                        | `"false"`         |
| `?active=false` | `boolean` (No transform)        | Validation Error  |
| `?active=false` | `boolean` (Transform + `@Type`) | `false` (Boolean) |
| `?active=false` | `boolean` (Transform + `@Type`) | `false` (Boolean) |
| `?active=1`     | `boolean` (Custom `@Transform`) | `true` (Boolean)  |

---

## 5. How to use the DTO in a Controller

Once you have defined your DTO with the proper transformation decorators, you can use it in your controller. Because you enabled the global `ValidationPipe` with `transform: true`, NestJS will automatically convert the incoming "raw" data into an instance of your DTO class.

### Using in Query Parameters

This is where boolean transformation is most commonly needed because URL queries are always strings.

```typescript
// products.controller.ts
@Get()
async findAll(@Query() query: ProductQueryDto) {
  // query.isActive will be a real boolean (true/false), not a string "true"/"false"
  console.log(typeof query.isActive); // "boolean"
  return this.productsService.findAll(query);
}
```

### Using in Route Parameters

Parameters in the URL path (like `:id` or `:isActive`) also benefit from transformation.

```typescript
// users.controller.ts
@Get(':id/status/:isActive')
async getStatus(
  @Param('id') id: number,            // Automatically converted to Number
  @Param('isActive') isActive: boolean // Automatically converted to Boolean
) {
  return { id, isActive, type: typeof isActive };
}
```

### Using in Request Body

For POST/PATCH requests, the transformation ensures that numeric strings from JSON are converted to numbers if requested.

```typescript
// colors.controller.ts
@Post()
async create(@Body() createColorDto: CreateColorDto) {
  // All fields in createColorDto are now correct types (Number, Boolean, etc.)
  return this.colorService.create(createColorDto);
}
```

### Why this is powerful

1. **Validation**: If a user sends `?isActive=hello`, the `@IsBoolean()` decorator will catch it and return a `400 Bad Request`.
2. **Logic Protection**: You don't need to write `if (isActive === "true")` anymore. You can just write `if (isActive)`.
3. **Database Safety**: You can pass the DTO directly to your Service or Database layer (like Drizzle) knowing the types are correct.
