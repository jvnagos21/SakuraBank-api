import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { jwt } from 'jsonwebtoken';
import { ContactRepository } from './repositories/contacts.repository';
import { Request } from 'express';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}

  async create(createContact: CreateContactDto, req: Request) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.sub.toString();
    const userEmail = decoded['userEmail'];

    const contactFound = await this.contactRepository.findContactByEmail(
      createContact.email,
    );

    if (contactFound) {
      throw new ConflictException('contact email is already in use');
    }

    if (userEmail === createContact.email) {
      throw new ConflictException(
        'contact cannot have the same email as the owner',
      );
    }

    return await this.contactRepository.create({
      ...createContact,
      userId: userId,
    });
  }

  findAll(req: Request) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.sub.toString();

    return this.contactRepository.findall(userId);
  }

  async findOne(id: string, req: Request) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.sub;

    const contactFound = await this.contactRepository.findOne(id);

    if (userId !== contactFound.userId) {
      throw new UnauthorizedException('access denied');
    }

    if (!contactFound) {
      throw new NotFoundException('contact not found');
    }

    return await this.contactRepository.findOne(id);
  }

  update(id: string, updateContact: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: String) {
    return `This action removes a #${id} contact`;
  }
}
