import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retriverUserController,
} from "../../controllers/users/users.controller";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../../schemas/users/users.schema";
import ensureUUIDIsValid from "../../middlewares/ensureUUIDIsValid.middleware";
import ensureUserExist from "../../middlewares/ensureUserExists.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);
userRoutes.get("", listUsersController);
userRoutes.get(
  "/:id",
  ensureUUIDIsValid,
  ensureUserExist,
  retriverUserController
);
userRoutes.delete(
  "/:id",
  ensureUUIDIsValid,
  ensureUserExist,
  deleteUserController
);

export default userRoutes;
