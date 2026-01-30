import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// Import entities
// Import entities
import { countriesEntity } from '../entities/countries.entity';
import { brandsEntity } from '../entities/brands.entity';
import { productCategoriesEntity } from '../entities/product-categories.entity';
import { productsEntity } from '../entities/products.entity';
import { usersEntity } from '../entities/users.entity';
import { paymentMethodsEntity } from '../entities/payment-methods.entity';
import { inventoryEntity } from '../entities/inventory.entity';
import { productVariantsEntity } from '../entities/product-variants.entity';
import { ordersEntity } from '../entities/orders.entity';
import { orderDetailsEntity } from '../entities/order-details.entity';
import { permissionsEntity } from '../entities/permissions.entity';
import { rolesEntity } from '../entities/roles.entity';
import { rolePermissionsEntity } from '../entities/role-permissions.entity';
import { userRolesEntity } from '../entities/user-roles.entity';

// Import mock data
import * as mockData from './mock-data';
import { getDefaultSpecs } from './specs-helper';

type DrizzleDBInstance = ReturnType<typeof drizzle>;
// Load environment variables
dotenv.config();

const seedCountries = async (db: DrizzleDBInstance) => {
  console.log('📍 Seeding countries...');
  await db.insert(countriesEntity).values(mockData.countriesData);
  console.log(`✅ Inserted ${mockData.countriesData.length} countries`);
};

const seedBrands = async (db: DrizzleDBInstance) => {
  console.log('🏢 Seeding brands...');
  await db.insert(brandsEntity).values(mockData.brandsData);
  console.log(`✅ Inserted ${mockData.brandsData.length} brands`);
};

const seedProductCategories = async (db: DrizzleDBInstance) => {
  console.log('📂 Seeding product categories...');
  await db
    .insert(productCategoriesEntity)
    .values(mockData.productCategoriesData);
  console.log(
    `✅ Inserted ${mockData.productCategoriesData.length} categories`,
  );
};

const seedInventory = async (db: DrizzleDBInstance) => {
  console.log('📦 Seeding inventory (warehouses)...');
  await db.insert(inventoryEntity).values(mockData.inventoryData);
  console.log(`✅ Inserted ${mockData.inventoryData.length} warehouses`);
};

const seedProductVariants = async (db: DrizzleDBInstance) => {
  console.log('📱 Seeding products and variants...');

  // Group variants by expected product ID
  const variantsByProductId = new Map<
    number,
    typeof mockData.productVariantsData
  >();
  mockData.productVariantsData.forEach((v) => {
    const pid = v.productId;
    if (!variantsByProductId.has(pid)) variantsByProductId.set(pid, []);
    variantsByProductId.get(pid)?.push(v);
  });

  let productCount = 0;
  let variantCount = 0;

  for (let i = 0; i < mockData.productsData.length; i++) {
    const productInput = mockData.productsData[i];
    const expectedId = i + 1; // Auto-increment starts at 1

    await db.transaction(async (tx) => {
      // Insert Product
      const [newProduct] = await tx
        .insert(productsEntity)
        .values(productInput)
        .returning();
      productCount++;

      let variants = variantsByProductId.get(expectedId) || [];

      if (variants.length === 0) {
        // ENFORCE RULE: If no variants defined, create a default one
        variants.push({
          productId: newProduct.id,
          inventoryId: 1, // Assumes first inventory exists
          colorHex: '#000000',
          colorName: 'Default',
          priceModifier: 0,
          quantity: 10,
          images: [],
          specifications: getDefaultSpecs(newProduct.categoryId) as any,
        });
      } else {
        // Bind correct ID
        variants = variants.map((v) => ({ ...v, productId: newProduct.id }));
      }

      // Insert Variants
      await tx.insert(productVariantsEntity).values(variants);
      variantCount += variants.length;
    });
  }
  console.log(
    `✅ Inserted ${productCount} products and ${variantCount} variants`,
  );
};

const seedUsers = async (db: DrizzleDBInstance) => {
  console.log('👥 Seeding users...');
  await db.insert(usersEntity).values(mockData.usersData);
  console.log(`✅ Inserted ${mockData.usersData.length} users`);
};

const seedRoles = async (db: DrizzleDBInstance) => {
  console.log('👑 Seeding roles...');
  await db.insert(rolesEntity).values(mockData.rolesData);
  console.log(`✅ Inserted ${mockData.rolesData.length} roles`);
};

const seedPermissions = async (db: DrizzleDBInstance) => {
  console.log('🔒 Seeding permissions...');
  await db.insert(permissionsEntity).values(mockData.permissionsData);
  console.log(`✅ Inserted ${mockData.permissionsData.length} permissions`);
};

const seedRolePermissions = async (db: DrizzleDBInstance) => {
  console.log('🔗 Seeding role permissions...');

  const roles = await db.select().from(rolesEntity);
  const permissions = await db.select().from(permissionsEntity);

  const roleMap = new Map(roles.map(r => [r.name, r.id]));
  const permMap = new Map(permissions.map(p => [p.action, p.id]));

  const rolePermissions: { roleId: number; permissionId: number }[] = [];

  mockData.rolePermissionsData.forEach((rp) => {
    const roleId = roleMap.get(rp.role);
    if (!roleId) return;

    if (rp.permissions === 'ALL') {
      permissions.forEach(p => {
        rolePermissions.push({ roleId, permissionId: p.id });
      })
    } else if (Array.isArray(rp.permissions)) {
      rp.permissions.forEach(action => {
        const pId = permMap.get(action);
        if (pId) {
          rolePermissions.push({ roleId, permissionId: pId });
        }
      })
    }
  });

  if (rolePermissions.length > 0) {
    // Remove duplicates
    const uniqueRP = Array.from(new Set(rolePermissions.map(rp => `${rp.roleId}:${rp.permissionId}`)))
      .map(s => {
        const [r, p] = s.split(':').map(Number);
        return { roleId: r, permissionId: p };
      });

    await db.insert(rolePermissionsEntity).values(uniqueRP);
  }
  console.log(`✅ Inserted ${rolePermissions.length} role permissions`);
};

const seedUserRoles = async (db: DrizzleDBInstance) => {
  console.log('👤 Seeding user roles...');
  const users = await db.select().from(usersEntity);
  const roles = await db.select().from(rolesEntity);
  const roleMap = new Map(roles.map(r => [r.name, r.id]));

  const userRoles: { userId: number; roleId: number }[] = [];

  const userRoleMap = new Map(mockData.userRolesData.map(u => [u.email, u.role]));

  users.forEach(user => {
    let roleName = userRoleMap.get(user.email) || 'customer';

    const roleId = roleMap.get(roleName);
    if (roleId) {
      userRoles.push({ userId: user.id, roleId: roleId });
    }
  });

  if (userRoles.length > 0) {
    await db.insert(userRolesEntity).values(userRoles);
  }
  console.log(`✅ Inserted ${userRoles.length} user roles`);
};

const seedPaymentMethods = async (db: DrizzleDBInstance) => {
  console.log('💳 Seeding payment methods...');
  await db.insert(paymentMethodsEntity).values(mockData.paymentMethodsData);
  console.log(
    `✅ Inserted ${mockData.paymentMethodsData.length} payment methods`,
  );
};

const seedOrders = async (db: DrizzleDBInstance) => {
  console.log('🛒 Seeding orders...');
  await db.insert(ordersEntity).values(mockData.ordersData);
  console.log(`✅ Inserted ${mockData.ordersData.length} orders`);
};

const seedOrderDetails = async (db: DrizzleDBInstance) => {
  console.log('📋 Seeding order details...');
  await db.insert(orderDetailsEntity).values(mockData.orderDetailsData);
  console.log(`✅ Inserted ${mockData.orderDetailsData.length} order details`);
};

const SEED_FUNCTIONS = [
  seedCountries,
  seedBrands,
  seedProductCategories,
  seedInventory,
  seedProductVariants,
  seedUsers,
  seedRoles,
  seedPermissions,
  seedRolePermissions,
  seedUserRoles,
  seedPaymentMethods,
  seedOrders,
  seedOrderDetails
];

async function seed() {
  // Create database connection
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    for (const func of SEED_FUNCTIONS) {
      await func(db);
    }

    console.log('\n🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Run the seed function
seed()
  .then(() => {
    console.log('✨ Seed script finished');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seed script failed:', error);
    process.exit(1);
  });
