import { CommandExceptionType } from '../../exceptions/command.exception';

const UUID_REGEX =
  /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

export class UserIdValueObject {
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
    if (UUID_REGEX.test(this._value) === false)
      this._error = {
        field: 'id',
        message: 'UUID is not valid',
      };
  }
}
