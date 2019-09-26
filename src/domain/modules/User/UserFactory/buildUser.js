// @flow

import type { User } from "../../../types/User";

const userAuth = data => ({ token: data.token });

const userProfile = data => ({
  name: data.name,
  email: data.email,
  avatar: data.avatar
});

export default (data: any): User => ({
  auth: userAuth(data),
  profile: userProfile(data)
});
