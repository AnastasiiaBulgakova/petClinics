export type ReproductionDTO = {
  id: number;
  estrusStart: string;
  mating: string;
  dueDate: string;
  childCount: number;
};

export type ReproductionParamsDTO = { petId: number; reproductionId: number };
