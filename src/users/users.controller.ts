import { PaginationQueryDto } from '@common/dto/query.dto';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationResponseDto } from '@common/dto/response.dto';
import { UserResponseDto } from './dto/response.dto';
import { plainToInstance } from 'class-transformer';
import { UserParamDto } from './dto/query.dto';
import type { UserEntityInsert } from './types/entities';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { Public } from '@common/decorators/public.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  @Public()
  @SerializeOptions({ strategy: 'excludeAll' })
  async findAll(@Query() usersQuery: PaginationQueryDto) {
    const paginationData = await this.userService.findAll(
      usersQuery.page,
      usersQuery.limit,
    );

    const userDto = plainToInstance(
      UserResponseDto,
      paginationData.data,
    );
    return new PaginationResponseDto(userDto, paginationData.metadata);
  }

  @Get(':id')
  @SerializeOptions({ strategy: 'excludeAll' })
  async findOne(@Param() param: UserParamDto) {
    const user = await this.userService.findOne({ id: param.id })
    return plainToInstance(UserResponseDto, user);
  }

  @Post()
  async create(@Body() user: UserEntityInsert) {
    return this.userService.create(user)
  }

  @Patch(":id")
  async update(@Body() param: UserParamDto) {

  }

  @Delete(':id')
  async delete(@Param() id: UserParamDto) {

  }
}
