import { PaginationQueryDto } from '@common/dto/query.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    async findAll(@Query() customersQuery: PaginationQueryDto) {
        return this.customersService.findAll(customersQuery.page, customersQuery.limit)
    }
}
