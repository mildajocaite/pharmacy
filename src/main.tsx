import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./components/home/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { translations } from "./translations";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Pages } from "./services/navigation-service";
import { CreateItemForm } from "./components/create-medication-item/create-medication-item";

const Stack = createNativeStackNavigator();

export const Main: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Pages.HOME}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Pages.CREATE_NEW_MEDICATION}
            component={CreateItemForm}
            options={{ title: translations.pages.addNewMedication.title }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
