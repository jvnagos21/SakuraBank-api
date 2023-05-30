import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnedcontactScherma } from "../../schemas/contacts/contacts.schema";
import { Contact } from "../../entities";

const retriveContactService = async (contactId: string) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id: contactId,
  });

  const returnContact = returnedcontactScherma.parse(findContact);

  return returnContact;
};

export default retriveContactService;
