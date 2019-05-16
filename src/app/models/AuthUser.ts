import { User } from './User';

export interface AuthUser {
    accessToken: string;
    refreshToken: string;
    user: User;
}
