import { UserEntity } from '../entities/user/user.entity';
import { IRepositoryBase } from './base/repository.base';

export type IUserRepository<Entity extends UserEntity = UserEntity> =
  IRepositoryBase<Entity>;
