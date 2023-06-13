import { CommandExceptionType } from '../../exceptions/domain.exception';

export abstract class ValueObjectBase<Type> {
  protected _error: CommandExceptionType;

  constructor(public readonly value: Type) {}

  get error(): CommandExceptionType {
    return this._error;
  }

  protected set error(error: CommandExceptionType) {
    this._error = error;
  }

  isValid(): boolean {
    this.validate();
    return this.error ? false : true;
  }

  protected abstract validate(): void;
}
