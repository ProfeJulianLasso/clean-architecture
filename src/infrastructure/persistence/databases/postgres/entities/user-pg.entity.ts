import { UserEntity } from 'src/domain/entities/user/user.entity';
import { NameValueObject } from 'src/domain/value-objects/user/name.value-object';
import { StateValueObject } from 'src/domain/value-objects/user/state.value-object';
import { UserIdValueObject } from 'src/domain/value-objects/user/user-id.value-object';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user', schema: 'public' })
export class UserPgEntity extends UserEntity {
  @Column({
    type: 'uuid',
    primary: true,
    name: 'id',
    transformer: {
      from: (value: string) => new UserIdValueObject(value),
      to: (item: UserIdValueObject) => item.value,
    },
  })
  id: UserIdValueObject;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'name',
    transformer: {
      from: (value: string) => new NameValueObject(value),
      to: (item: NameValueObject) => item.value,
    },
  })
  name: NameValueObject;

  @Column({
    type: 'boolean',
    name: 'state',
    transformer: {
      from: (value: boolean) => new StateValueObject(value),
      to: (item: StateValueObject) => item.value,
    },
  })
  state: StateValueObject;
}
