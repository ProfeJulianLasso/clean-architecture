import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/domain/repositories/user.repository';
import { Repository } from 'typeorm';
import { UserPgEntity } from '../entities/user-pg.entity';

export class UserPgRepository implements IUserRepository<UserPgEntity> {
  constructor(
    @InjectRepository(UserPgEntity)
    private readonly repository: Repository<UserPgEntity>,
  ) {}
  create(entity: UserPgEntity): Promise<UserPgEntity> {
    return this.repository.save(user);
  }
  update(id: string, entity: UserPgEntity): Promise<UserPgEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(...where: any[]): Promise<UserPgEntity[]> {
    throw new Error('Method not implemented.');
  }
}
