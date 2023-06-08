import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { Repository } from 'typeorm';
import { UserPgEntity } from '../../entities/user-pg.entity';

@Injectable()
export class UserPgRepository<Entity extends UserPgEntity = UserPgEntity>
  implements IUserRepository<Entity>
{
  constructor(
    @InjectRepository(UserPgEntity)
    private readonly repository: Repository<Entity>,
  ) {}

  create(entity: Entity): Promise<Entity> {
    return this.repository.save(entity);
  }

  update(id: string, entity: Entity): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  find(...where: any[]): Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }
}
