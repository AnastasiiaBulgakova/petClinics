export type VaccinationDTO = {
  id: number;
  date: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
};

export type AddVaccinationDTO = Omit<VaccinationDTO, 'id'>;
