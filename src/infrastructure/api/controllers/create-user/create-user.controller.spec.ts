import { Test } from '@nestjs/testing';
// import { UserRepository } from 'src/infrastructure/persistence/repositories/user.repository';
import { UserEntity } from '../../../../domain/entities/user/user.entity';
import { NameValueObject } from '../../../../domain/value-objects/name.value-object';
import { StateValueObject } from '../../../../domain/value-objects/state.value-object';
import { UserIdValueObject } from '../../../../domain/value-objects/user-id.value-object';
import { UserRepository } from '../../../persistence/repositories/user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserController } from './create-user.controller';

describe('CreateUserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [
        {
          provide: UserRepository,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', (done) => {
    // Arrange
    const request = {
      id: 'a4c9bd2f-0ca7-43b2-9b90-18034e7ba801',
      name: 'Julian Lasso',
    } as CreateUserDto;

    const response = new UserEntity({
      id: new UserIdValueObject('a4c9bd2f-0ca7-43b2-9b90-18034e7ba801'),
      name: new NameValueObject('Julian Lasso'),
      state: new StateValueObject(true),
    });

    // const mockResponse = new UserEntity({
    //   id: new UserIdValueObject('a4c9bd2f-0ca7-43b2-9b90-18034e7ba801'),
    //   name: new NameValueObject('Julian Lasso'),
    //   state: new StateValueObject(true),
    // });

    // (controller as any).useCase.execute = jest.fn().mockResolvedValue(response);

    const spy = jest
      .spyOn(controller.useCase, 'execute')
      .mockImplementation((data) =>
        Promise.resolve(
          new UserEntity({
            id: new UserIdValueObject(data.id),
            name: new NameValueObject(data.name),
            state: new StateValueObject(true),
          }),
        ),
      );

    // controller.useCase.execute = jest.fn().mockImplementation((data) => {
    //   if (data.id === 'a4c9bd2f-0ca7-43b2-9b90-18034e7ba801')
    //     return Promise.resolve({
    //       id: data.id,
    //       name: data.name,
    //       state: true,
    //     });
    //   else return Promise.reject({ error: 'Error' });
    // });

    // controller.useCase.execute = jest.fn().mockResolvedValue(mockResponse);

    // Act
    const result = controller.create(request);

    // Assert
    // result.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => done(),
    // });
    expect(spy).toBeCalledWith(request);
    result.subscribe({
      next: (data) => {
        // expect(data).toStrictEqual(response);
        expect(data).toBeInstanceOf(UserEntity);
        // expect(data.id.value).toBe(request.id);
        expect(data).toStrictEqual(response);
      },
      complete: () => done(),
    });
  });
});
