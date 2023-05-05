export interface Translations {
  tabs: Tabs;
  pages: Pages;
  categories: Categories;
}
export interface Tabs {
  home: string;
  test: string;
}
export interface Pages {
  addNewMedication: AddNewMedication;
  medicationsList: MedicationsList;
  activeMedicationsList: ActiveMedicationsListOrInactiveMedicationsListOrAntibioticsList;
  inactiveMedicationsList: ActiveMedicationsListOrInactiveMedicationsListOrAntibioticsList;
  antibioticsList: ActiveMedicationsListOrInactiveMedicationsListOrAntibioticsList;
}
export interface AddNewMedication {
  title: string;
  fields: Fields;
}
export interface Fields {
  name: string;
  description: string;
  category: string;
  amount: string;
  expired: string;
  diagnosis: string;
  choose: string;
}
export interface MedicationsList {
  title: string;
  search: string;
}
export interface ActiveMedicationsListOrInactiveMedicationsListOrAntibioticsList {
  title: string;
}
export interface Categories {
  ANALGESICS: string;
  THROAT_PAIN: string;
  DIGESTIVE: string;
  VITAMINS: string;
  ANTIBIOTICS: string;
  FEVER: string;
}
