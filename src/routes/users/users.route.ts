import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retriverUserController,
  updateUserController,
} from "../../controllers/users/users.controller";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import {
  userSchema,
  userUpdateScherma,
} from "../../schemas/users/users.schema";
import ensureUUIDIsValid from "../../middlewares/ensureUUIDIsValid.middleware";
import ensureUserExists from "../../middlewares/ensureUserExists.middleware";

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
  ensureUserExists,
  retriverUserController
);

userRoutes.patch(
  "/:id",
  ensureUUIDIsValid,
  ensureDataIsValidMiddleware(userUpdateScherma),
  ensureUserExists,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureUUIDIsValid,
  ensureUserExists,
  deleteUserController
);

export default userRoutes;
