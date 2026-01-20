import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { sql } from 'drizzle-orm';

// Import entities
import { countriesEntity } from '../entities/countries.entity';
import { brandsEntity } from '../entities/brands.entity';
import { productCategoriesEntity } from '../entities/product-categories.entity';
import { productsEntity } from '../entities/products.entity';
import { customersEntity } from '../entities/customers.entity';
import { paymentMethodsEntity } from '../entities/payment-methods.entity';
import { inventoryEntity } from '../entities/inventory.entity';
import { productVariantsEntity } from '../entities/product-variants.entity';
import { ordersEntity } from '../entities/orders.entity';
import { orderDetailsEntity } from '../entities/order-details.entity';

// Load environment variables
dotenv.config();

async function resetDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    console.log('🗑️  Clearing database...');

    // Delete in reverse order of dependencies
    await db.delete(orderDetailsEntity);
    console.log('  ✅ Cleared order_details');

    await db.delete(ordersEntity);
    console.log('  ✅ Cleared orders');

    await db.delete(productVariantsEntity);
    console.log('  ✅ Cleared product_variants');

    await db.delete(inventoryEntity);
    console.log('  ✅ Cleared inventory');

    await db.delete(paymentMethodsEntity);
    console.log('  ✅ Cleared payment_methods');

    await db.delete(customersEntity);
    console.log('  ✅ Cleared customers');

    await db.delete(productsEntity);
    console.log('  ✅ Cleared products');

    await db.delete(productCategoriesEntity);
    console.log('  ✅ Cleared product_categories');

    await db.delete(brandsEntity);
    console.log('  ✅ Cleared brands');

    await db.delete(countriesEntity);
    console.log('  ✅ Cleared countries');

    // Reset sequences for auto-increment IDs
    await db.execute(sql`
      ALTER SEQUENCE IF EXISTS brands_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS product_categories_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS products_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS customers_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS inventory_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS product_variants_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS orders_id_seq RESTART WITH 1;
      ALTER SEQUENCE IF EXISTS order_details_id_seq RESTART WITH 1;
    `);
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
