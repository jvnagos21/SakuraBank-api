import { Repository } from "typeorm";
import { IContactUpdate } from "../../interfaces/contacts/contacts.interface";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnedcontactScherma } from "../../schemas/contacts/contacts.schema";

const updateContactService = async (
  newContactData: IContactUpdate,
  contactId: string
) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContact = await contactRepository.findOneBy({
    id: contactId,
  });

  const contact = contactRepository.create({
    ...oldContact,
    ...newContactData,
  });

  await contactRepository.save(contact);

  const returnContact = returnedcontactScherma.parse(contact);

  return returnContact;
};

export default updateContactService;
