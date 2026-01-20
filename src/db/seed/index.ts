import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

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

// Import mock data
import * as mockData from './mock-data';

// Load environment variables
dotenv.config();

async function seed() {
  // Create database connection
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    console.log('🌱 Starting database seeding...');

    // 1. Seed Countries
    console.log('📍 Seeding countries...');
    await db.insert(countriesEntity).values(mockData.countriesData);
    console.log(`✅ Inserted ${mockData.countriesData.length} countries`);

    // 2. Seed Brands (depends on countries)
    console.log('🏢 Seeding brands...');
    await db.insert(brandsEntity).values(mockData.brandsData);
    console.log(`✅ Inserted ${mockData.brandsData.length} brands`);

    // 3. (Removed color seeding - now handled in variants)

    // 4. Seed Product Categories
    console.log('📂 Seeding product categories...');
    await db
      .insert(productCategoriesEntity)
      .values(mockData.productCategoriesData);
    console.log(
      `✅ Inserted ${mockData.productCategoriesData.length} categories`,
    );

    // 5. Seed Products (depends on brands, colors, categories)
    console.log('📱 Seeding products...');
    await db.insert(productsEntity).values(mockData.productsData);
    console.log(`✅ Inserted ${mockData.productsData.length} products`);

    // 6. Seed Customers
    console.log('👥 Seeding customers...');
    await db.insert(customersEntity).values(mockData.customersData);
    console.log(`✅ Inserted ${mockData.customersData.length} customers`);

    // 7. Seed Payment Methods
    console.log('💳 Seeding payment methods...');
    await db.insert(paymentMethodsEntity).values(mockData.paymentMethodsData);
    console.log(
      `✅ Inserted ${mockData.paymentMethodsData.length} payment methods`,
    );

    // 8. Seed Inventory
    console.log('📦 Seeding inventory (warehouses)...');
    await db.insert(inventoryEntity).values(mockData.inventoryData);
    console.log(`✅ Inserted ${mockData.inventoryData.length} warehouses`);

    // 8.5 Seed Product Variants (depends on products and inventory)
    console.log('🌈 Seeding product variants...');
    await db.insert(productVariantsEntity).values(mockData.productVariantsData);
    console.log(
      `✅ Inserted ${mockData.productVariantsData.length} product variants`,
    );

    // 9. Seed Orders (depends on customers, products, payment methods)
    console.log('🛒 Seeding orders...');
    await db.insert(ordersEntity).values(mockData.ordersData);
    console.log(`✅ Inserted ${mockData.ordersData.length} orders`);

    // 10. Seed Order Details (depends on orders, products)
    console.log('📋 Seeding order details...');
    await db.insert(orderDetailsEntity).values(mockData.orderDetailsData);
    console.log(
      `✅ Inserted ${mockData.orderDetailsData.length} order details`,
    );

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
