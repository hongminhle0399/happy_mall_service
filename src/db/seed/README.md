# Database Seeding

This directory contains mock data and seeding scripts for the Happy Mall tech devices store database.

## Overview

The mock data includes:

- **8 Countries**: US, China, South Korea, Japan, Taiwan, Germany, Finland, Sweden
- **25 Brands**: Apple, Samsung, Sony, LG, Dell, HP, Lenovo, and more
- **17 Colors**: Various colors in hex format for product variants
- **16 Product Categories**: Smartphones, Laptops, Tablets, Smartwatches, etc.
- **57 Products**: Comprehensive range of tech devices from major brands
- **15 Customers**: Sample customer records with contact information
- **8 Payment Methods**: Credit Card, PayPal, Apple Pay, Cash on Delivery, etc.
- **35+ Inventory Records**: Stock availability across multiple locations
- **15 Orders**: Sample orders with various dates and payment methods
- **17 Order Details**: Items within each order

## Database Schema

The data is organized according to these relationships:

```
countries
    └── brands
            └── products
                    ├── colors
                    ├── product_categories
                    └── inventory

customers
    └── orders
            ├── payment_methods
            ├── products
            └── order_details
                    └── products
```

## Files

- **`mock-data.ts`**: Contains all mock data organized by table
- **`seed.ts`**: Seeding script that populates the database
- **`README.md`**: This file

## Usage

### Prerequisites

1. Ensure you have a PostgreSQL database set up
2. Configure your database connection in `.env` file:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/happy_mall
   ```

### Running the Seed Script

Run the following command to populate your database:

```bash
npm run db:seed
```

This will:

1. Connect to your database
2. Insert data in the correct order (respecting foreign key constraints)
3. Display progress for each table
4. Show success messages with counts

### Order of Insertion

The script inserts data in this order to respect foreign key dependencies:

1. Countries (no dependencies)
2. Brands (depends on countries)
3. Colors (no dependencies)
4. Product Categories (no dependencies)
5. Products (depends on brands, colors, categories)
6. Customers (no dependencies)
7. Payment Methods (no dependencies)
8. Inventory (depends on products)
9. Orders (depends on customers, products, payment methods)
10. Order Details (depends on orders, products)

## Sample Data Highlights

### Popular Products

- **Smartphones**: iPhone 15 Pro, Galaxy S24 Ultra, Pixel 8 Pro
- **Laptops**: MacBook Pro 16", Dell XPS 15, ThinkPad X1 Carbon
- **Headphones**: AirPods Pro 2, Sony WH-1000XM5, Bose QuietComfort Ultra
- **Smartwatches**: Apple Watch Series 9, Galaxy Watch 6
- **Gaming**: PlayStation 5, Xbox Series X

### Inventory Locations

Products are stocked across multiple cities:

- New York (Downtown)
- San Francisco (Mission)
- Austin (Tech District)
- Palo Alto (Silicon Valley)

### Customer Orders

Sample orders include:

- Various dates from December 2024 to January 2025
- Multiple payment methods
- Single and multi-item orders
- Different product categories

## Customizing Mock Data

To add or modify data:

1. Edit `mock-data.ts` to add/change records
2. Ensure foreign key references are valid
3. Run the seed script again

**Note**: The seed script will insert new records. If you need to reset the database, you should truncate tables first or use migrations to reset the schema.

## Troubleshooting

### Foreign Key Violations

If you get foreign key errors, ensure:

- Referenced records exist before inserting dependent records
- IDs match between related tables
- The insertion order is correct

### Duplicate Key Errors

If running the seed script multiple times:

- The script will fail on duplicate primary keys
- Consider truncating tables before re-seeding
- Or use ON CONFLICT clauses for upserts

### Connection Errors

If you can't connect to the database:

- Verify DATABASE_URL in .env file
- Ensure PostgreSQL is running
- Check database credentials and permissions

## Next Steps

After seeding:

1. Verify data using your preferred database client
2. Test your API endpoints with the seeded data
3. Use the mock data for development and testing
4. Create additional seed scripts for different scenarios if needed
