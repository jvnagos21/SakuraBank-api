import { Router } from "express";
import ensureDataIsValid from "../../middlewares/ensureDataIsValid.middleware";
import ensureUUIDIsValid from "../../middlewares/ensureUUIDIsValid.middleware";
import ensureContactExists from "../../middlewares/ensureContactExists.middleware";
import {
  contactSchema,
  contactUpdateScherma,
} from "../../schemas/contacts/contacts.schema";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  retriverContactController,
  updateContactController,
} from "../../controllers/contacts/contacts.controller";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureDataIsValid(contactSchema),
  createContactController
);

contactRoutes.get("", listAllContactsController);

contactRoutes.get(
  "/:id",
  ensureUUIDIsValid,
  ensureContactExists,
  retriverContactController
);

contactRoutes.patch(
  "/:id",
  ensureUUIDIsValid,
  ensureDataIsValid(contactUpdateScherma),
  updateContactController
);

contactRoutes.delete(
  "/:id",
  ensureUUIDIsValid,
  ensureContactExists,
  deleteContactController
);

export default contactRoutes;
