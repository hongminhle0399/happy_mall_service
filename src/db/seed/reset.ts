import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { sql } from 'drizzle-orm';

// Import entities from schema to ensure consistency
import * as schema from '../schema';

// Load environment variables
dotenv.config();

const entities = [
  { entity: schema.orderDetailsEntity, name: 'order_details' },
  { entity: schema.ordersEntity, name: 'orders' },
  { entity: schema.productVariantsEntity, name: 'product_variants' },
  { entity: schema.inventoryEntity, name: 'inventory' },
  { entity: schema.paymentMethodsEntity, name: 'payment_methods' },
  { entity: schema.userProfilesEntity, name: 'user_profiles' },
  { entity: schema.userRolesEntity, name: 'users_roles' },
  { entity: schema.rolePermissionsEntity, name: 'role_permissions' },
  { entity: schema.usersEntity, name: 'users' },
  { entity: schema.productsEntity, name: 'products' },
  { entity: schema.productCategoriesEntity, name: 'product_categories' },
  { entity: schema.brandsEntity, name: 'brands' },
  { entity: schema.countriesEntity, name: 'countries' },
  { entity: schema.rolesEntity, name: 'roles' },
  { entity: schema.permissionsEntity, name: 'permissions' },
];

async function resetDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    console.log('🗑️  Clearing database...');

    // Delete in reverse order of dependencies
    for (const { entity, name } of entities) {
      try {
        await db.delete(entity);
        console.log(`  ✅ Cleared ${name}`);
      } catch (e: any) {
        if (e.message?.includes('does not exist')) {
          console.log(`  🟡 Skipped ${name} (table does not exist)`);
        } else {
          console.error(`  ❌ Error clearing ${name}:`, e.message);
        }
      }
    }

    // Reset identity columns
    const tablesWithIdentity = [
      'brands',
      'product_categories',
      'products',
      'users',
      'inventory',
      'product_variants',
      'orders',
      'order_details',
      'roles',
      'permissions',
      'user_profiles',
    ];

    for (const table of tablesWithIdentity) {
      try {
        await db.execute(sql.raw(`ALTER TABLE ${table} ALTER COLUMN id RESTART WITH 1`));
      } catch (e) {
        // Ignore errors if table or column doesn't exist
      }
    }
    console.log('  ✅ Reset auto-increment sequences');

    console.log('\n✅ Database cleared successfully!');
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Run the reset function
resetDatabase()
  .then(() => {
    console.log('✨ Reset script finished');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Reset script failed:', error);
    process.exit(1);
  });
