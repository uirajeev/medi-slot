'use server';

import { ID, Query } from 'node-appwrite';
import { parseStringify } from '../utils';
import { users } from '../appwrite.config';

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    return parseStringify(newUser);
  } catch (error: any) {
    if (error?.code === 409) {
      const existingUser = await users.list([Query.equal('email', user.email)]);

      return existingUser?.users[0];
    }
    throw error;
  }
};
