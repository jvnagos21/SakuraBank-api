import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../../interfaces/users/users.interface";
import createUserService from "../../services/users/createUser.services";
import deleteUserService from "../../services/users/deleteUser.service";
import retriverUserService from "../../services/users/retriverUser.service";
import listUsersService from "../../services/users/listUsers.service";
import updateUserService from "../../services/users/updateUser.service";

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

const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const newUserData: IUserUpdate = req.body;

  const userUpdated: IUser = await updateUserService(newUserData, userId);

  res.status(200).json(userUpdated);
};

export {
  createUserController,
  deleteUserController,
  retriverUserController,
  listUsersController,
  updateUserController,
};
