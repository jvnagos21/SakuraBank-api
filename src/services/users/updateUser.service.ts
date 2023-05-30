import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IUser,
  IUserReturn,
  IUserUpdate,
} from "../../interfaces/users/users.interface";
import { returnedUserScherma } from "../../schemas/users/users.schema";

const updateUserService = async (
  newUserData: IUserUpdate,
  userId: string
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  const user: IUser = userRepository.create({
    ...oldUser,
    ...newUserData,
  });

  await userRepository.save(user);

  const returnUser = returnedUserScherma.parse(user);

  return returnUser;
};

export default updateUserService;
