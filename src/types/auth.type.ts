import { User } from './user.type';

export interface AuthAsanPayload {
  data: string;
}

export interface AuthLoginPayload {
  username: string;
  password: string;
}

export interface Auth {
  user: User;
  accessToken: string;
  accessTokenExpireDate: Date;
  refreshToken: string;
  refreshTokenExpireDate: Date;
  asanToken?: string;
}
