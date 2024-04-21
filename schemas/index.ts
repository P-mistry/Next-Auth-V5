import * as Z from 'zod';

export const LoginSchema = Z.object({
  email: Z.string().email({
    message: 'Email is require'
  }),
  password: Z.string().min(1, {
    message: 'password is required',
  }),
});
export const RegisterSchema = Z.object({
  email: Z.string().email({
    message: 'Email is require'
  }),
  password: Z.string().min(6, {
    message: 'Minimun 6 characters required',
  }),
  name: Z.string().min(1, {
    message: 'Name is required'
  }),
});
