import { UserEntity } from 'src/domain/entities/user/user.entity';
import { NameValueObject } from 'src/domain/value-objects/user/name.value-object';
import { StateValueObject } from 'src/domain/value-objects/user/state.value-object';
import { UserIdValueObject } from 'src/domain/value-objects/user/user-id.value-object';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users', schema: 'public' })
export class UserPgEntity extends UserEntity {
  @Column({ type: 'uuid', primary: true, name: 'id' })
  id: UserIdValueObject;

  @Column({ type: 'varchar', length: 50, name: 'name' })
  name: NameValueObject;

  @Column({ type: 'boolean', name: 'state' })
  state: StateValueObject;
}
