import { PetType } from '../../types/mainTypes';

export interface ColorDTO {
  color: string[];
}

export interface BreedDTO {
  petType: PetType;
  breed: string[];
}
