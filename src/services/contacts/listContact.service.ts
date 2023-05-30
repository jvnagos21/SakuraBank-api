import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { returnMultplecontactScherma } from "../../schemas/contacts/contacts.schema";

const listAllContactsService = async () => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContacts = await contactRepository.find();

  const returnContacts = returnMultplecontactScherma.parse(findContacts);

  return returnContacts;
};

export default listAllContactsService;
