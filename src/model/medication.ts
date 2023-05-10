import { Category } from "./category";

export interface Medication {
  id: number;
  title: string;
  description: string;
  category: Category;
  expired: boolean;
  diagnosis: string;
  amount: string;
  imageUri: string;
}
