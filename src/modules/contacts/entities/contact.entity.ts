import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  readonly createdAt: Date;
  readonly userId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
