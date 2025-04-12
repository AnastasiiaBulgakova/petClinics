import { ExternalType } from '../../types/mainTypes';

export type ExternalDTO = {
  id: number;
  date: string;
  type: ExternalType;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: true;
  periodDays: number;
};

export type AddExternalDTO = Omit<ExternalDTO, 'id'>;
