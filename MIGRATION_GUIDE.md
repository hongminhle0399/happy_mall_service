# Database Migration Guide - Timezone-Aware Timestamps

This guide will help you migrate your existing database to use timezone-aware timestamps.

## 📋 What Changed

### Before (TIMESTAMP):

```sql
created_at TIMESTAMP DEFAULT NOW()
updated_at TIMESTAMP DEFAULT NOW()
deleted_at TIMESTAMP
```

### After (TIMESTAMPTZ):

```sql
created_at TIMESTAMPTZ DEFAULT NOW()
updated_at TIMESTAMPTZ DEFAULT NOW()
deleted_at TIMESTAMPTZ
```

---

## 🚀 Migration Steps

### Step 1: Generate Migration

This creates a migration file based on schema changes:

```bash
npx drizzle-kit generate
```

**What it does:**

- Compares your entities with the current database
- Generates SQL migration files in `./drizzle` folder
- Creates ALTER TABLE statements to update timestamp columns

**Expected output:**

```
📦 Generating migrations...
✅ Migration generated: drizzle/0001_update_timestamps.sql
```

---

### Step 2: Review the Migration (IMPORTANT!)

Before applying, check the generated migration file:

```bash
# Open the latest migration file in drizzle folder
# Example: drizzle/0001_update_timestamps.sql
```

**Expected SQL (example):**

```sql
-- Update products table
ALTER TABLE "products"
  ALTER COLUMN "created_at" TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC';

ALTER TABLE "products"
  ALTER COLUMN "updated_at" TYPE TIMESTAMPTZ USING updated_at AT TIME ZONE 'UTC';

ALTER TABLE "products"
  ALTER COLUMN "deleted_at" TYPE TIMESTAMPTZ USING deleted_at AT TIME ZONE 'UTC';

-- Repeat for customers, inventory, orders tables...
```

> [!IMPORTANT]
> The `USING created_at AT TIME ZONE 'UTC'` part is crucial! It tells PostgreSQL to treat existing timestamps as UTC when converting.

---

### Step 3: Apply Migration

#### Option A: Using Drizzle Kit Push (Recommended for Development)

```bash
npx drizzle-kit push
```

**What it does:**

- Applies schema changes directly to the database
- No migration history tracking
- **⚠️ Use only in development!**

**Pros:**

- ✅ Fast and simple
- ✅ Good for rapid development

**Cons:**

- ❌ No rollback capability
- ❌ Not suitable for production

---

#### Option B: Using Drizzle Kit Migrate (Recommended for Production)

First, create a migration script:

**Create `src/db/migrate.ts`:**

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function runMigration() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  console.log('🚀 Running migrations...');

  await migrate(db, { migrationsFolder: './drizzle' });

  console.log('✅ Migrations completed!');

  await pool.end();
}

runMigration()
  .then(() => {
    console.log('✨ Migration script finished');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Migration failed:', error);
    process.exit(1);
  });
```

**Add script to `package.json`:**

```json
{
  "scripts": {
    "db:migrate": "tsx src/db/migrate.ts",
    "db:seed": "tsx src/db/seed/index.ts"
  }
}
```

**Run migration:**

```bash
npm run db:migrate
```

**Pros:**

- ✅ Migration history tracked
- ✅ Can rollback if needed
- ✅ Production-ready

**Cons:**

- ❌ Requires more setup

---

### Step 4: Verify Migration

Check that timestamps are now timezone-aware:

```sql
-- Connect to your database
psql -d your_database_name

-- Check column types
\d products

-- Should show:
-- created_at | timestamp with time zone | not null | default now()
-- updated_at | timestamp with time zone | not null | default now()
-- deleted_at | timestamp with time zone |          |
```

Or query directly:

```sql
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'products'
  AND column_name IN ('created_at', 'updated_at', 'deleted_at');
```

**Expected result:**

```
   column_name   |          data_type
-----------------+-----------------------------
 created_at      | timestamp with time zone
 updated_at      | timestamp with time zone
 deleted_at      | timestamp with time zone
```

---

### Step 5: Verify Existing Data

Check that your existing data still has correct timestamps:

```sql
SELECT id, created_at, updated_at
FROM products
LIMIT 5;
```

**Expected output:**

```
 id |          created_at           |          updated_at
----+-------------------------------+-------------------------------
  1 | 2026-01-19 17:00:00+00        | 2026-01-19 17:00:00+00
  2 | 2026-01-19 17:00:00+00        | 2026-01-19 17:00:00+00
```

Notice the `+00` suffix - that's the timezone offset (UTC)!

---

## 🔄 Complete Workflow

### For Fresh Database (No Existing Data)

```bash
# 1. Generate migration
npx drizzle-kit generate

# 2. Apply migration
npx drizzle-kit push

# 3. Seed database
npm run db:seed
```

---

### For Existing Database (With Data)

```bash
# 1. Backup your database first!
pg_dump -U your_user -d your_database > backup_$(date +%Y%m%d).sql

# 2. Generate migration
npx drizzle-kit generate

# 3. Review the migration file
cat drizzle/0001_*.sql

# 4. Apply migration
npm run db:migrate  # or npx drizzle-kit push for dev

# 5. Verify migration
psql -d your_database -c "\d products"

# 6. Test with a query
psql -d your_database -c "SELECT id, created_at FROM products LIMIT 1;"
```

---

## ⚠️ Important Considerations

### 1. **Backup First!**

Always backup before migrating:

```bash
# PostgreSQL
pg_dump -U postgres -d happy_mall > backup_before_migration.sql

# Restore if needed
psql -U postgres -d happy_mall < backup_before_migration.sql
```

---

### 2. **Timezone Assumption**

The migration assumes existing timestamps are in **UTC**. If your existing data is in a different timezone, adjust the migration:

```sql
-- If existing data is in Bangkok time (+07:00)
ALTER TABLE "products"
  ALTER COLUMN "created_at" TYPE TIMESTAMPTZ
  USING created_at AT TIME ZONE 'Asia/Bangkok';
```

---

### 3. **Application Downtime**

For production:

- ✅ Schedule maintenance window
- ✅ Put application in read-only mode
- ✅ Run migration
- ✅ Verify data
- ✅ Resume normal operation

---

### 4. **Testing**

After migration, test your application:

```typescript
// Test creating a new record
const newProduct = await db
  .insert(productsEntity)
  .values({
    name: 'Test Product',
    price: 99.99,
    brandId: 1,
    categoryId: 1,
  })
  .returning();

console.log(newProduct[0].createdAt);
// Should be: "2026-01-20T00:31:20+07:00" (ISO string with timezone)
```

---

## 🛠️ Troubleshooting

### Issue: Migration fails with "column does not exist"

**Solution:** Your database might be out of sync. Try:

```bash
npx drizzle-kit push --force
```

---

### Issue: Timestamps show wrong timezone

**Check your database timezone:**

```sql
SHOW timezone;
```

**Set to UTC (recommended):**

```sql
ALTER DATABASE your_database SET timezone TO 'UTC';
```

---

### Issue: Existing data lost timezone info

**Fix manually:**

```sql
-- Assuming existing data was in UTC
UPDATE products
SET created_at = created_at AT TIME ZONE 'UTC'
WHERE created_at IS NOT NULL;
```

---

## 📊 Migration Checklist

- [ ] Backup database
- [ ] Update `common/index.ts` with timezone config (✅ Already done!)
- [ ] Fix mock data to match schema (✅ Already done!)
- [ ] Generate migration with `npx drizzle-kit generate`
- [ ] Review generated SQL migration file
- [ ] Apply migration with `npx drizzle-kit push` or `npm run db:migrate`
- [ ] Verify column types with `\d table_name`
- [ ] Test existing data integrity
- [ ] Test creating new records
- [ ] Update application code if needed
- [ ] Deploy to production (if applicable)

---

## 🎯 Quick Commands Reference

```bash
# Generate migration
npx drizzle-kit generate

# Apply migration (dev)
npx drizzle-kit push

# Apply migration (prod)
npm run db:migrate

# Check migration status
npx drizzle-kit check

# Seed database
npm run db:seed

# Backup database
pg_dump -U postgres -d happy_mall > backup.sql

# Restore database
psql -U postgres -d happy_mall < backup.sql
```

---

## ✅ Success Criteria

After migration, you should have:

1. ✅ All timestamp columns are `TIMESTAMPTZ`
2. ✅ Existing data preserved with correct timestamps
3. ✅ New records get timezone-aware timestamps
4. ✅ Application works correctly
5. ✅ API returns ISO 8601 formatted timestamps

**Example API response:**

```json
{
  "id": 1,
  "name": "iPhone 15 Pro",
  "price": 999.99,
  "createdAt": "2026-01-20T00:31:20+07:00",
  "updatedAt": "2026-01-20T00:31:20+07:00",
  "deletedAt": null
}
```

---

## 🚀 Ready to Migrate!

Choose your path:

**Development (Quick):**

```bash
npx drizzle-kit push
npm run db:seed
```

**Production (Safe):**

```bash
# 1. Backup
pg_dump -U postgres -d happy_mall > backup.sql

# 2. Generate & review
npx drizzle-kit generate
cat drizzle/0001_*.sql

# 3. Migrate
npm run db:migrate

# 4. Verify
psql -d happy_mall -c "\d products"
```
