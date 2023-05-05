import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pages } from "../../services/navigation-service";
import { translations } from "../../translations";
import { AddButton } from "./add-button";
import { ActiveMedicationsList } from "../medications-list/active-medications-list";
import { InactiveMedicationsList } from "../medications-list/inactive-medications-list";
import { AntibioticsList } from "../medications-list/antibiotics-list";

const Tab = createBottomTabNavigator();

export const Home: FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={Pages.ACTIVE_MEDICATIONS_LIST}
      component={ActiveMedicationsList}
      options={{
        title: translations.pages.activeMedicationsList.title,
        headerRight: () => <AddButton />,
      }}
    />
    <Tab.Screen
      name={Pages.INACTIVE_MEDICATIONS_LIST}
      component={InactiveMedicationsList}
      options={{
        title: translations.pages.inactiveMedicationsList.title,
        headerRight: () => <AddButton />,
      }}
    />
    <Tab.Screen
      name={Pages.ANTIBIOTICS_LIST}
      component={AntibioticsList}
      options={{
        title: translations.pages.antibioticsList.title,
        headerRight: () => <AddButton />,
      }}
    />
  </Tab.Navigator>
);
