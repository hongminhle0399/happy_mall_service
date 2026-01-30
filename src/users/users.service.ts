import { DRIZZLE } from '@common/constants/db.constant';
import { PaginationResponseDto } from '@common/dto/response.dto';
import { usersEntity } from '@db/schema';
import type { DrizzleDB } from '@db/types/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { and, eq, sql, SQLWrapper } from 'drizzle-orm';
import { UserResponseDto } from './dto/response.dto';
import { UserEntityInsert, UserEntitySelect } from './types/entities';

@Injectable()
export class UsersService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}
  async update(id: number, user: UserEntityInsert) {
    return await this.db
      .update(usersEntity)
      .set(user)
      .where(eq(usersEntity.id, id))
      .returning();
  }

  async findOne(userInfo: Partial<UserEntitySelect>) {
    const whereConditions = Object.keys(userInfo).reduce((acc, curProp: keyof UserEntitySelect) => {
      acc.push(eq(usersEntity[curProp], userInfo[curProp]!))
      return acc
    }, [] as SQLWrapper[]);

    const [user] = await this.db.select().from(usersEntity).where(and(...whereConditions))
    return user;
  }

  async delete(id: number) {
    return await this.db
      .delete(usersEntity)
      .where(eq(usersEntity.id, id))
      .returning({ id: usersEntity.id });
  }

  async create(users: UserEntityInsert) {
    return await this.db
      .insert(usersEntity)
      .values(users)
      .returning({ id: usersEntity.id });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const _limit = limit >= 20 ? 20 : limit;
    const _page = page <= 0 ? 1 : page;
    const _offset = Math.ceil(_limit * (_page - 1));
    const usersQuery = this.db
      .select()
      .from(usersEntity)
      .offset(_offset)
      .limit(_limit);

    const totalRowsQuery = this.db
      .select({ count: sql<number>`count(*)` })
      .from(usersEntity);

    const [users, totalRows] = await Promise.all([usersQuery, totalRowsQuery]);

    return {
      data: users,
      metadata: {
        limit: _limit,
        offset: _offset,
        total: Number(totalRows[0].count),
      },
    } as PaginationResponseDto<UserResponseDto>;
  }
}
