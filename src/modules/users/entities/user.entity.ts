import { randomUUID } from 'crypto';
import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  phone: string;
  readonly createdAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
