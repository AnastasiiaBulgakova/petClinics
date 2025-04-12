import { PetType } from '../../types/mainTypes';

export interface Pet {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  petType: PetType;
}

export interface ClientResponse {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
  pets: Pet[];
}

export interface AvatarResponse {
  filename: string;
  url: string;
}
