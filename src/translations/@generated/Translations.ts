export interface Translations {
  tabs: Tabs;
  pages: Pages;
  pageHeaderTitles: PageHeaderTitles;
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
  medicationDetails: MedicationDetails;
}
export interface AddNewMedication {
  title: string;
  fields: Fields;
  submit: string;
  update: string;
}
export interface Fields {
  name: string;
  description: string;
  category: string;
  amount: string;
  expired: string;
  diagnosis: string;
  image: string;
  choose: string;
  uploadImage: string;
}
export interface MedicationsList {
  title: string;
  search: string;
}
export interface ActiveMedicationsListOrInactiveMedicationsListOrAntibioticsList {
  title: string;
}
export interface MedicationDetails {
  quantity: string;
  removeModal: RemoveModal;
}
export interface RemoveModal {
  title: string;
  yes: string;
  no: string;
}
export interface PageHeaderTitles {
  HOME: string;
  CREATE_NEW_MEDICATION: string;
  ACTIVE_MEDICATIONS_LIST: string;
  INACTIVE_MEDICATIONS_LIST: string;
  ANTIBIOTICS_LIST: string;
}
export interface Categories {
  ANALGESICS: string;
  THROAT_PAIN: string;
  DIGESTIVE: string;
  VITAMINS: string;
  ANTIBIOTICS: string;
  FEVER: string;
}
