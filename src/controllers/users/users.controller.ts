import { Request, Response } from "express";
import { IUser } from "../../interfaces/users/users.interface";
import createUserService from "../../services/users/create_user.services";
import deleteUserService from "../../services/users/delete_user.service";
import retriverUserService from "../../services/users/retriver_user.service";
import listUsersService from "../../services/users/list_users.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

const retriverUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const user = await retriverUserService(userId);

  return res.status(200).json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  deleteUserController,
  retriverUserController,
  listUsersController,
};
