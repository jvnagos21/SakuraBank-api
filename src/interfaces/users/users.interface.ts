import {
  userSchema,
  returnedUserScherma,
  returnMultpleuserScherma,
  returnCreateUser,
} from "../../schemas/users/users.schema";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnedUserScherma>;
type IUserCreateReturn = z.infer<typeof returnCreateUser>;
type IUsersReturn = z.infer<typeof returnMultpleuserScherma>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUserUpdate, IUsersReturn, IUserCreateReturn };
