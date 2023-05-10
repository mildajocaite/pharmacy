import React, { FC } from "react";
import { HomePageTabs } from "../../services/navigation-service";
import { translations } from "../../translations";
import { ActiveMedicationsList } from "../medications-list/active-medications-list";
import { InactiveMedicationsList } from "../medications-list/inactive-medications-list";
import { AntibioticsList } from "../medications-list/antibiotics-list";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { colorWhite } from "../../style/colors";

const Tab = createMaterialBottomTabNavigator();

export const Home: FC = () => (
  <Tab.Navigator
    initialRouteName={HomePageTabs.ACTIVE_MEDICATIONS_LIST}
    barStyle={{ backgroundColor: colorWhite }}
  >
    <Tab.Screen
      name={HomePageTabs.ACTIVE_MEDICATIONS_LIST}
      component={ActiveMedicationsList}
      options={{
        title: translations.pages.activeMedicationsList.title,
        tabBarIcon: "emoticon-sick",
      }}
    />
    <Tab.Screen
      name={HomePageTabs.INACTIVE_MEDICATIONS_LIST}
      component={InactiveMedicationsList}
      options={{
        title: translations.pages.inactiveMedicationsList.title,
        tabBarIcon: "pill",
      }}
    />
    <Tab.Screen
      name={HomePageTabs.ANTIBIOTICS_LIST}
      component={AntibioticsList}
      options={{
        title: translations.pages.antibioticsList.title,
        tabBarIcon: "bacteria",
      }}
    />
  </Tab.Navigator>
);
