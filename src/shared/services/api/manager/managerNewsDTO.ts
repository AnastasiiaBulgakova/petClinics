import { MarketingType } from '../../types/mainTypes';

export interface NewsDTO {
  id: number;
  title: string;
  content: string;
  type: MarketingType;
  endTime: string;
  published: boolean;
  pictures: string[];
  important: boolean;
}

export type CreateNewsDTO = Omit<NewsDTO, 'id'>;
