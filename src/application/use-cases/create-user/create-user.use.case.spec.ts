import { ICreateUserCommand } from '../../../domain/commands/create-user/create-user.command';
// import { CreateUserValidator, holaMundoFn } from '../../../domain/commands/create-user/create-user.validator';
import { ValueObjectExceptionType } from '../../../domain/exceptions/domain.exception';
import { CreateUserUseCase } from './create-user.use.case';

import * as Case from '../../../domain/commands/create-user/create-user.validator';

jest.mock('../../../domain/commands/create-user/create-user.validator');

describe('CreateUserUseCase', () => {
  let repository: any;
  let useCase: CreateUserUseCase;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
    };
    useCase = new CreateUserUseCase(repository);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should ', async () => {
    // Arrange
    const data = {} as ICreateUserCommand;
    const messageError = 'Invalid data 2';
    jest.spyOn(Case, 'HolaMundoFn').mockReturnValue('Hola mundo');
    jest
      .spyOn(Case.CreateUserValidator.prototype, 'isValid')
      .mockReturnValue(false);
    jest
      .spyOn(Case.CreateUserValidator.prototype, 'getErrors')
      .mockReturnValue(new Array<ValueObjectExceptionType>());

    try {
      // Act
      await useCase.execute(data);
    } catch (error) {
      // Assert
      expect(error).toBeDefined();
      expect(error.message).toBe(messageError);
    }
  });
});
