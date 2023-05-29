import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserReturn } from "../../interfaces/users/users.interface";
import { returnedUserScherma } from "../../schemas/users/users.schema";

const retriverUserService = async (userId: string): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  const returnUser = returnedUserScherma.parse(findUser!);

  return returnUser;
};

export default retriverUserService;
