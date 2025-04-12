import { VacationType } from '../../types/mainTypes';

export interface DoctorNonWorkingDTO {
  doctorNonWorkingId: number;
  doctorId: number;
  type: VacationType;
  date: string;
}
