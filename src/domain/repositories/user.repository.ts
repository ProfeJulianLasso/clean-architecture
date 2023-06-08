import { UserEntity } from '../entities/user/user.entity';

export interface IUserRepository<Entity extends UserEntity = UserEntity> {
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
  findAll(): Promise<Entity[]>;
}
