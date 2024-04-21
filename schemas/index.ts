import * as Z from 'zod';

export const LoginSchema = Z.object({
  email: Z.string().email({
    message: 'Email is require'
  }),
  password: Z.string().min(1, {
    message: 'password is required',
  }),
});
