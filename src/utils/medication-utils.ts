import { Medication } from "../model/medication";
import { Category } from "../model/category";

export class MedicationUtils {
  public static readonly filterExpiredMedications = (
    medications: Medication[]
  ): Medication[] => medications.filter((item) => item.expired);

  public static readonly filterUnexpiredMedications = (
    medications: Medication[]
  ): Medication[] => medications.filter((item) => !item.expired);

  public static readonly filterByCategory = (
    medications: Medication[],
    category: Category
  ) => medications.filter((item) => item.category === category);

  public static readonly findById = (medications: Medication[], id: number) =>
    medications.find((item) => item.id === id) ||
    (() => {
      throw new Error(`Item ${id} doesn't exist`);
    })();

  public static readonly getNewId = (medications: Medication[]) =>
    medications.length
      ? Math.max(...medications.map((medication) => medication.id)) + 1
      : 0;
}
