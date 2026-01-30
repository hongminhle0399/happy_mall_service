import {
  brandsEntity,
  countriesEntity,
  inventoryEntity,
  orderDetailsEntity,
  ordersEntity,
  paymentMethodsEntity,
  permissionsEntity,
  productCategoriesEntity,
  productsEntity,
  productVariantsEntity,
  rolesEntity,
  usersEntity,
  userProfilesEntity,
} from '@db/schema';
import { relations } from 'drizzle-orm';

export const ordersRelations = relations(ordersEntity, ({ many, one }) => ({
  orderDetails: many(orderDetailsEntity),
  user: one(usersEntity, {
    fields: [ordersEntity.userId],
    references: [usersEntity.id],
  }),
  paymentMethod: one(paymentMethodsEntity, {
    fields: [ordersEntity.paymentMethodId],
    references: [paymentMethodsEntity.id],
  }),
}));

export const orderDetailsRelations = relations(
  orderDetailsEntity,
  ({ one }) => ({
    order: one(ordersEntity, {
      fields: [orderDetailsEntity.orderId],
      references: [ordersEntity.id],
    }),
    product: one(productsEntity, {
      fields: [orderDetailsEntity.productId],
      references: [productsEntity.id],
    }),
  }),
);

export const productVariantsRelations = relations(
  productVariantsEntity,
  ({ one }) => ({
    product: one(productsEntity, {
      fields: [productVariantsEntity.productId],
      references: [productsEntity.id],
    }),
    inventory: one(inventoryEntity, {
      fields: [productVariantsEntity.inventoryId],
      references: [inventoryEntity.id],
    }),
  }),
);

export const productsRelations = relations(productsEntity, ({ one }) => ({
  category: one(productCategoriesEntity, {
    fields: [productsEntity.categoryId],
    references: [productCategoriesEntity.id],
  }),
  brand: one(brandsEntity, {
    fields: [productsEntity.brandId],
    references: [brandsEntity.id],
  }),
}));

export const brandsRelations = relations(brandsEntity, ({ one }) => ({
  country: one(countriesEntity, {
    fields: [brandsEntity.countryId],
    references: [countriesEntity.id],
  }),
}));

export const rolesRelations = relations(rolesEntity, ({ many }) => ({
  permissions: many(permissionsEntity),
}));

export const permissionsRelations = relations(
  permissionsEntity,
  ({ many }) => ({
    roles: many(rolesEntity),
  }),
);

export const userProfilesRelations = relations(userProfilesEntity, ({ one }) => ({
  profile: one(usersEntity, {
    fields: [userProfilesEntity.userId],
    references: [usersEntity.id]
  })
}));
