export type ValueObjectExceptionType = {
  field: string;
  message: string;
};

export class DomainException extends Error {
  readonly details: ValueObjectExceptionType | ValueObjectExceptionType[];

  constructor(
    message: string,
    details?: ValueObjectExceptionType | ValueObjectExceptionType[],
  ) {
    super(message);
    if (details) this.details = details;
  }
}
