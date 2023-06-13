import { ValueObjectBase } from './base/value-object.base';

export class StateValueObject extends ValueObjectBase<boolean> {
  protected validate(): void {
    if ((this.value === true || this.value === false) === false)
      this.error = {
        field: 'state',
        message: 'State is not valid',
      };
  }
}
