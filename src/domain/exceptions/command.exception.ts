export type CommandExceptionType = {
  field: string;
  message: string;
};

export class CommandException extends Error {
  private readonly _details: CommandExceptionType[];

  constructor(message: string, details?: CommandExceptionType[]) {
    super(message);
    if (details) this._details = details;
  }

  get details(): CommandExceptionType[] {
    return this._details;
  }
}
