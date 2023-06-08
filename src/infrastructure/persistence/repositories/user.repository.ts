import { Injectable } from '@nestjs/common';
import { UserPgRepository } from '../databases/postgres/repositories/user/user-pg.repository';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository extends UserPgRepository<UserEntity> {}
