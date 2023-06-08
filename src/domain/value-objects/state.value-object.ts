import { ValueObjectBase } from './base/value-object.base';

export class StateValueObject extends ValueObjectBase<boolean> {
  protected validate(): void {
    if ((this._value === true || this._value === false) === false)
      this._error = {
        field: 'state',
        message: 'State is not valid',
      };
  }
}
