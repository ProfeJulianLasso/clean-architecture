export class NameValueObject {
  constructor(private _value: string) {}

  get value(): string {
    return this._value;
  }

  isValid(): boolean {
    return this._value.length > 4;
  }
}
