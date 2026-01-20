import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { DrizzleModule } from '@db/drizzle.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [DrizzleModule]
})
export class CustomersModule {}
