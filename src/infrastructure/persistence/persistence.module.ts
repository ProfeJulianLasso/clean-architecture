import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class PersistenceModule {}
