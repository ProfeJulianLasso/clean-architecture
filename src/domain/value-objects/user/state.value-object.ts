import { CommandExceptionType } from '../../exceptions/command.exception';

export class StateValueObject {
  private _error: CommandExceptionType;

  constructor(private readonly _value: boolean) {}

  get value(): boolean {
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
    if ((this._value === true || this._value === false) === false)
      this._error = {
        field: 'state',
        message: 'State is not valid',
      };
  }
}
