import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { User } from "../entities";

const ensureUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: req.params.id,
  });

  if (!user) {
    throw new AppError("User does not exist", 404);
  }

  return next();
};

export default ensureUserExist;
