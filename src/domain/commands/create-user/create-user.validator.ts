import { NameValueObject } from '../../value-objects/name.value-object';
import { UserIdValueObject } from '../../value-objects/user-id.value-object';
import { ValidatorBase } from '../base/validator.base';
import { ICreateUserCommand } from './create-user.command';

export function HolaMundoFn(): string {
  return 'Hola mundo';
}

export class CreateUserValidator extends ValidatorBase {
  id: UserIdValueObject;
  name: NameValueObject;

  constructor(private data: ICreateUserCommand) {
    super();
    this.id = new UserIdValueObject(data.id);
    this.name = new NameValueObject(data.name);
    // TODO: Hacer que la asignación de los value objects sea dinámica desde una clase abstracta
    // const info: { [key: string]: any } = CreateUserCommandValueObject;
    // const properties = Object.keys(info) as (keyof typeof data)[];
    // properties.forEach((key) => {
    //   const Constructor = info[key];
    //   this[key] = new Constructor(this.data[key]);
    // });
  }

  isValid(): boolean {
    // TODO: Hacer que la validación sea dinámica desde una clase abstracta
    // const keys = Object.keys(
    //   CreateUserCommandValueObject,
    // ) as (keyof CreateUserValidator)[];

    // keys.forEach((key) => {
    //   const value = this[key];
    //   if ('isValid' in value && value.isValid() === false)
    //     this.error = value.error;
    // });

    if (this.id.isValid() === false) this.error = this.id.error;
    if (this.name.isValid() === false) this.error = this.name.error;
    return super.isValid();
  }
}
