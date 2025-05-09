import * as z from 'zod';
import parsePhoneNumber from 'libphonenumber-js';
import { LocationSchema } from '@/lib/schemas';

export const zPhoneNumber = z.string().transform((value, ctx) => {
  const phoneNumber = parsePhoneNumber(value, {
    defaultCountry: 'AR',
  });

  console.log('es valido:', phoneNumber?.isValid());
  if (!phoneNumber?.isValid()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'El numero de telefono no es valido',
    });
    return z.NEVER;
  }

  const internationalNumber = phoneNumber
    .formatInternational()
    .replace(/\s+/g, '');

  // Manually insert '9' after the country calling code
  const formattedNumber = internationalNumber.replace(
    `+${phoneNumber.countryCallingCode}`,
    `+${phoneNumber.countryCallingCode}9`
  );
  return formattedNumber.trim();
});

export const BranchesSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: 'Ingresa un nombre!' }).optional(),
  email: z.string().email('Ingresa un email valido!').optional(),
  phoneNumber: zPhoneNumber.optional(),
  isMain: z.boolean().optional(),
  address: LocationSchema.superRefine((address, ctx) => {
    if (!address.id || !address.name) {
      ctx.addIssue({
        path: ['name'],
        code: z.ZodIssueCode.custom,
        message: 'El nombre de la dirección y su ID son obligatorios',
      });
    }

    if (!address.location || address.location.coordinates.length !== 2) {
      ctx.addIssue({
        path: ['location', 'coordinates'],
        code: z.ZodIssueCode.custom,
        message: 'Las coordenadas deben contener latitud y longitud',
      });
    } else if (
      !address.location.coordinates.every((coord) => typeof coord === 'number')
    ) {
      ctx.addIssue({
        path: ['location', 'coordinates'],
        code: z.ZodIssueCode.custom,
        message: 'Las coordenadas deben ser números válidos',
      });
    }
  }),
});

export const BranchesSchemaResults = z.object({
  company: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    branches: BranchesSchema.array(),
  }),
});

export type BranchesSchemaType = z.infer<typeof BranchesSchema>;
export type BranchesSchemaResultsType = z.infer<typeof BranchesSchemaResults>;
