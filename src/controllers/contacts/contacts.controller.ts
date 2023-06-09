import { Request, Response } from "express";
import { IContact } from "../../interfaces/contacts/contacts.interface";
import createContactService from "../../services/contacts/createContact.service";
import retriveContactService from "../../services/contacts/retriverContact.service";
import listAllContactsService from "../../services/contacts/listContact.service";
import updateContactService from "../../services/contacts/updateContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContact = req.body;

  const newContact = await createContactService(contactData);

  return res.status(201).json(newContact);
};

const listAllContactsController = async (req: Request, res: Response) => {
  const contacts = await listAllContactsService();

  return res.status(200).json(contacts);
};

const retriverContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;

  const contact = await retriveContactService(contactId);

  return res.status(200).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;

  const newContactData = req.body;

  const contactUpdated: IContact = await updateContactService(
    newContactData,
    contactId
  );
  res.status(200).json(contactUpdated);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(contactId);
  return res.status(204).send();
};

export {
  createContactController,
  retriverContactController,
  listAllContactsController,
  updateContactController,
  deleteContactController,
};
