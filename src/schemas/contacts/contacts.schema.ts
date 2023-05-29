import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3).max(120),
  email: z.string().email(),
  phone: z.string(),
  user: z.any(),
});

const contactUpdateScherma = contactSchema.partial();

const returnedcontactScherma = contactSchema.extend({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

const returnMultplecontactScherma = returnedcontactScherma.array();

export {
  contactSchema,
  contactUpdateScherma,
  returnMultplecontactScherma,
  returnedcontactScherma,
};
