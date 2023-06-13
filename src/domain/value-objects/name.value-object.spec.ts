import { NameValueObject } from './name.value-object';

describe('Name.ValueObject', () => {
  it('should be defined', () => {
    // Arrange
    const name = 'Julian Lasso';

    // Act
    const instance = new NameValueObject(name);

    // Assert
    expect(instance).toBeDefined();
  });

  it('should fail if provide an empty name', () => {
    // Arrange
    const name = '';
    const expectedError = false;
    const expectedErrorMessage = {
      field: 'name',
      message: 'name is min 4 and max 50 characters',
    };

    // Act
    const instance = new NameValueObject(name);
    const resultIsValid = instance.isValid();
    const resultError = instance.error;

    // Assert
    expect(resultIsValid).toBe(expectedError);
    expect(resultError).toStrictEqual(expectedErrorMessage);
  });

  it('should fail if provide a name with less than 4 characters', () => {
    // Arrange
    const name = 'Jul';
    const expectedError = false;
    const expectedErrorMessage = {
      field: 'name',
      message: 'name is min 4 and max 50 characters',
    };

    // Act
    const instance = new NameValueObject(name);
    const resultIsValid = instance.isValid();
    const resultError = instance.error;

    // Assert
    expect(resultIsValid).toBe(expectedError);
    expect(resultError).toStrictEqual(expectedErrorMessage);
  });

  it('should fail if provide a name with more than 50 characters', () => {
    // Arrange
    const name = 'Julian Lasso'.repeat(10);
    const expectedError = false;
    const expectedErrorMessage = {
      field: 'name',
      message: 'name is min 4 and max 50 characters',
    };

    // Act
    const instance = new NameValueObject(name);
    const resultIsValid = instance.isValid();
    const resultError = instance.error;

    // Assert
    expect(resultIsValid).toBe(expectedError);
    expect(resultError).toStrictEqual(expectedErrorMessage);
  });

  it('should fail if provide a name with a number', () => {
    // Arrange
    const name = 'Julian Lasso';
    const expectedError = true;

    // Act
    const instance = new NameValueObject(name);
    const resultIsValid = instance.isValid();

    // Assert
    expect(resultIsValid).toBe(expectedError);
  });
});
