import { ValueObjectBase } from './base/value-object.base';

const MIN_LENGTH = 4;
const MAX_LENGTH = 50;

export class NameValueObject extends ValueObjectBase<string> {
  protected validate(): void {
    if (this.value.length < MIN_LENGTH || this.value.length > MAX_LENGTH)
      this.error = {
        field: 'name',
        message: `Name is min ${MIN_LENGTH} and max ${MAX_LENGTH} characters`,
      };
    else if (typeof this.value !== 'string')
      this.error = {
        field: 'name',
        message: 'Name is not valid string',
      };
  }
}
