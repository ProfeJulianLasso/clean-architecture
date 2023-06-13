export abstract class UseCaseBase<Aggregate> {
  protected readonly aggregate: Aggregate;
  constructor(aggregate: Aggregate) {
    this.aggregate = aggregate;
  }

  abstract execute(...data: any[]): any;
}
