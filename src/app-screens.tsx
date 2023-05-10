import React, { FC } from "react";
import { Pages } from "./services/navigation-service";
import { Home } from "./components/home/home";
import { TabUtils } from "./utils/tab-utils";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AddNewMedicationButton } from "./components/add-new-medication-button/add-new-medication-button";
import { CreateMedicationForm } from "./components/create-medication-form/create-medication-form";
import { translations } from "./translations";
import { MedicationDetails } from "./components/medication-details/medication-details";
import { MedicationUtils } from "./utils/medication-utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RemoveMedicationButton } from "./components/remove-medication-button/remove-medication-button";
import { getMedications } from "./redux/medication-selector";

export type RootStackParamList = {
  [Pages.HOME]: undefined;
  [Pages.CREATE_NEW_MEDICATION]: undefined;
  [Pages.MEDICATION_DETAILS]: { id: number };
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
        name={Pages.MEDICATION_DETAILS}
        component={MedicationDetails}
        options={({ route }) => ({
          headerTitle: MedicationUtils.findById(medications, route.params.id)
            .title,
          headerRight: () => <RemoveMedicationButton id={route.params.id} />,
        })}
      />
    </Stack.Navigator>
  );
};
