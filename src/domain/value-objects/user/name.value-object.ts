import { CommandExceptionType } from '../../exceptions/command.exception';

const MIN_LENGTH = 4;
const MAX_LENGTH = 50;

export class NameValueObject {
  private _error: CommandExceptionType;

  constructor(private readonly _value: string) {}

  get value(): string {
    return this._value;
  }

  get error(): CommandExceptionType {
    return this._error;
  }

  isValid(): boolean {
    this.validate();
    return this._error ? false : true;
  }

  private validate(): void {
    if (
      (this._value.length >= MIN_LENGTH && this._value.length <= MAX_LENGTH) ===
      false
    )
      this._error = {
        field: 'name',
        message: `Name is min ${MIN_LENGTH} and max ${MAX_LENGTH} characters`,
      };
    else if (typeof this._value !== 'string')
      this._error = {
        field: 'name',
        message: 'Name is not valid string',
      };
  }
}
