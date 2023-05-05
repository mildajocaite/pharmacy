import { Category } from "./category";

export interface Item {
  title: string;
  description: string;
  category: Category;
  expired: boolean;
  diagnosis: string;
  amount: string;
}
