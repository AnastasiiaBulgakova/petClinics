// общий DTO с телом
export interface BaseExamPetDataDTO {
  weight: number;
  isCanMove: boolean;
  text: string;
}

export interface ExamDataDTO {
  id: number;
  petId: number;
  weight: number;
  isCanMove: boolean;
  text: string;
}

export interface AddExamPetDTO {
  petId: number;
  newExam: BaseExamPetDataDTO;
}

export interface EditExamPetDTO {
  examId: number;
  newExam: BaseExamPetDataDTO;
}
