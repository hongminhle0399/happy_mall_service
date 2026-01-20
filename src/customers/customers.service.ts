import { DRIZZLE } from '@common/constants/db.constant';
import { customersEntity } from '@db/schema';
import type { DrizzleDB } from '@db/types/drizzle';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    constructor(@Inject(DRIZZLE) private db: DrizzleDB) { }

    async findAll(page: number = 1, limit: number = 10) {
        const _limit = limit >= 20 ? 20 : limit
        const _page = page <= 0 ? 1 : page
        const _offset = Math.ceil(_limit * (_page - 1))
        return this.db
            .select()
            .from(customersEntity)
            .offset(_offset)
            .limit(_limit)
    }
}
