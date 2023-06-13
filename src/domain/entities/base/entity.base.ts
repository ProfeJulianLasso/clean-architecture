import { ValueObjectBase } from '../../value-objects/base/value-object.base';

export abstract class EntityBase {
  constructor(private data?: Partial<EntityBase>) {
    const attributes = Object.keys(data ?? {});
    if (data && attributes.length > 0)
      attributes.forEach((attribute) => {
        const temporalAttribute = attribute as keyof EntityBase;
        if (data[temporalAttribute])
          this.setValue(temporalAttribute, data[temporalAttribute]);
      });
  }

  private setValue(attribute: keyof EntityBase, value: any): void {
    if (value && value instanceof ValueObjectBase && 'value' in value)
      this[attribute] = value as keyof EntityBase;
  }
}
