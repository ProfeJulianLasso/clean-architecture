import { ICreateUserCommand } from '../../../domain/commands/create-user/create-user.command';

export class CreateUserDto implements ICreateUserCommand {
  id: string;
  name: string;
}
