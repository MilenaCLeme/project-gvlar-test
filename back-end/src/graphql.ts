/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

export class UpdateUser {
  id?: Nullable<string>;
  name?: Nullable<string>;
  email?: Nullable<string>;
  password?: Nullable<string>;
  phone?: Nullable<string>;
  validation?: Nullable<boolean>;
  role?: Nullable<string>;
}

export class User {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  validation: boolean;
  role: string;
}

export class WhereUser {
  __typename?: 'WhereUser';
  id?: Nullable<string>;
  email?: Nullable<string>;
}

export abstract class IQuery {
  __typename?: 'IQuery';
  users: User[];
  user?: Nullable<User>;
}

export abstract class IMutation {
  __typename?: 'IMutation';
  createUser?: Nullable<User>;
  updateUser?: Nullable<User>;
  deleteUser?: Nullable<User>;
  login?: Nullable<string>;
}

type Nullable<T> = T | null;
