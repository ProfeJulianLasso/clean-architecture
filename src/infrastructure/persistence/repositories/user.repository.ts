import { Injectable } from '@nestjs/common';
import { UserPgRepository } from '../databases/postgres/repositories/user-pg.repository';

@Injectable()
export class UserRepository extends UserPgRepository {}
