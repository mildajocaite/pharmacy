import { HomePageTabs } from "../services/navigation-service";
import { translations } from "../translations";

export class TabUtils {
  public static getHeaderTitle(route: string | undefined): string {
    switch (route) {
      case HomePageTabs.ACTIVE_MEDICATIONS_LIST:
        return translations.pages.activeMedicationsList.title;
      case HomePageTabs.INACTIVE_MEDICATIONS_LIST:
        return translations.pages.inactiveMedicationsList.title;
      case HomePageTabs.ANTIBIOTICS_LIST:
        return translations.pages.antibioticsList.title;
      default:
        return translations.pages.activeMedicationsList.title;
    }
  }
}
