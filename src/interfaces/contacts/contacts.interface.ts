import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  returnMultplecontactScherma,
  returnedcontactScherma,
} from "../../schemas/contacts/contacts.schema";

type IContact = z.infer<typeof contactSchema>;
type IContactReturn = z.infer<typeof returnedcontactScherma>;
type IContactsReturn = z.infer<typeof returnMultplecontactScherma>;
type IContactUpdate = DeepPartial<IContact>;

export { IContact, IContactReturn, IContactsReturn, IContactUpdate };
