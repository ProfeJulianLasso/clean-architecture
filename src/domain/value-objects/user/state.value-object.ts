export class StateValueObject {
  constructor(private _value: boolean) {}

  get value(): boolean {
    return this._value;
  }

  isValid(): boolean {
    return this._value === true || this._value === false;
  }
}
