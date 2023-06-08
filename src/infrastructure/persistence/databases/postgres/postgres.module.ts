import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './configs/typeorm-config.service';
import { UserPgEntity } from './entities/user-pg.entity';
import { UserPgRepository } from './repositories/user/user-pg.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([UserPgEntity]),
  ],
  controllers: [],
  providers: [UserPgRepository],
  exports: [TypeOrmModule, UserPgRepository],
})
export class PostgresModule {}
