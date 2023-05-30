import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (contactId: string) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  await contactRepository.remove(contact!);
};

export default deleteContactService;
