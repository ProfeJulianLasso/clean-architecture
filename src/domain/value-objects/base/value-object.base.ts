import { CommandExceptionType } from '../../exceptions/command.exception';

export abstract class ValueObjectBase<Type> {
  protected _error: CommandExceptionType;

  constructor(protected readonly _value: Type) {}

  get value(): Type {
    return this._value;
  }

  get error(): CommandExceptionType {
    return this._error;
  }

  isValid(): boolean {
    this.validate();
    return this._error ? false : true;
  }

  protected abstract validate(): void;
}
