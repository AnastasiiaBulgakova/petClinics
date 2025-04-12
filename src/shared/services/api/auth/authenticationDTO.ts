import { RoleType } from '../../types/mainTypes';

export interface loginBody {
  username: string;
  password: string;
}

export interface loginResponse {
  jwtToken: string;
  role: RoleType;
}
