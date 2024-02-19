import bcrypt from 'bcrypt';

export function encrypt(word: string) {
  return bcrypt.hashSync(word, bcrypt.genSaltSync(10));
}
