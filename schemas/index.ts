import * as Z from 'zod';

export const LoginSchema = Z.object({
  email: Z.string().email(),
  password: Z.string()
});
