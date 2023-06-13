import { Test } from '@nestjs/testing';
// import { UserRepository } from 'src/infrastructure/persistence/repositories/user.repository';
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

    const response = {
      id: 'a4c9bd2f-0ca7-43b2-9b90-18034e7ba801',
      name: 'Julian Lasso',
      state: true,
    };

    controller.useCase.execute = jest.fn().mockImplementation((data) => {
      return Promise.resolve({
        id: data.id,
        name: data.name,
        state: true,
      });
    });

    // Act
    const result = controller.create(request);

    // Assert
    // result.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => done(),
    // });
    result.subscribe({
      next: (data) => {
        expect(data).toStrictEqual(response);
      },
      complete: () => done(),
    });
  });
});
