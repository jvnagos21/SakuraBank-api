import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const userFound = await this.usersRepository.findUserByEmail(
      createUserDto.email,
    );
    if (userFound) {
      throw new ConflictException('email already exists');
    }
    return await this.usersRepository.create(createUserDto);
  }

  async findAll() {
    const users = await this.usersRepository.findall();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto);
    return user;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);
    return;
  }
}
