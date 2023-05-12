import React, { FC } from "react";
import { Pages } from "./services/navigation-service";
import { Home } from "./components/home/home";
import { TabUtils } from "./utils/tab-utils";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AddNewMedicationButton } from "./components/add-new-medication-button/add-new-medication-button";
import { translations } from "./translations";
import { MedicationDetails } from "./components/medication-details/medication-details";
import { MedicationUtils } from "./utils/medication-utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RemoveMedicationButton } from "./components/remove-medication-button/remove-medication-button";
import { getMedications } from "./redux/medication-selector";
import { EditMedicationButton } from "./components/edit-medication-button/edit-medication-button";
import { EditMedicationForm } from "./components/medication-form/edit-medication-form";
import { CreateMedicationForm } from "./components/medication-form/create-medication-form";

export type RootStackParamList = {
  [Pages.HOME]: undefined;
  [Pages.CREATE_NEW_MEDICATION]: undefined;
  [Pages.MEDICATION_DETAILS]: { id: number };
  [Pages.EDIT_MEDICATION]: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppScreens: FC = () => {
  const medications = useSelector(getMedications);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Pages.HOME}
        component={Home}
        options={({ route }) => ({
          headerTitle: TabUtils.getHeaderTitle(
            getFocusedRouteNameFromRoute(route)
          ),
          headerRight: AddNewMedicationButton,
        })}
      />
      <Stack.Screen
        name={Pages.CREATE_NEW_MEDICATION}
        component={CreateMedicationForm}
        options={{ title: translations.pages.addNewMedication.title }}
      />
      <Stack.Screen
        name={Pages.EDIT_MEDICATION}
        component={EditMedicationForm}
        options={({ route }) => ({
          headerTitle: MedicationUtils.findById(medications, route.params.id)
            .title,
        })}
      />
      <Stack.Screen
        name={Pages.MEDICATION_DETAILS}
        component={MedicationDetails}
        options={({ route }) => ({
          headerTitle: MedicationUtils.findById(medications, route.params.id)
            .title,
          headerRight: () => (
            <>
              <EditMedicationButton id={route.params.id} />
              <RemoveMedicationButton id={route.params.id} />
            </>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
