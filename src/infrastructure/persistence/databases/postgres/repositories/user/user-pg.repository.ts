import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from '../../../../../../domain/repositories/user.repository';
import { UserPgEntity } from '../../entities/user-pg.entity';

@Injectable()
export class UserPgRepository<Entity extends UserPgEntity = UserPgEntity>
  implements IUserRepository<Entity>
{
  constructor(
    @InjectRepository(UserPgEntity)
    private readonly repository: Repository<Entity>,
  ) {}

  findAll(): Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }

  findBy(entity: Partial<Entity>): Promise<Entity> {
    throw new Error('Method not implemented.' + entity.id);
  }

  create(entity: Entity): Promise<Entity> {
    return this.repository.save(entity);
  }

  update(id: string, entity: Entity): Promise<Entity> {
    throw new Error('Method not implemented. ' + id + entity);
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented. ' + id);
  }
}
