import { PetType, GenderType, SizeType } from '../../types/mainTypes';

export interface PetDTO {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  petType: PetType;
  breed: string;
  gender: GenderType;
  color: string;
  size: SizeType;
  weight: number;
  description: string;
}

export type NewPetDTO = Omit<PetDTO, 'id'>;
