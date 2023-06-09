export interface IRepositoryBase<Entity> {
  findAll(): Promise<Entity[]>;
  findBy(entity: Entity): Promise<Entity>;
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
}
