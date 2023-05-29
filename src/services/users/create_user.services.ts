import {
  IUser,
  IUserCreateReturn,
} from "../../interfaces/users/users.interface";
import { returnCreateUser } from "../../schemas/users/users.schema";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";

const createUserService = async (
  userData: IUser
): Promise<IUserCreateReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnCreateUser.parse(user);

  return newUser;
};

export default createUserService;
