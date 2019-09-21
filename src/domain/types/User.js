/* @flow */
export type User = {
  auth: { token: string },
  profile?: { name: string, email: string, avatar: string }
};
