import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./theme/theme";
import { AppScreens } from "./app-screens";

export const Main: FC = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppScreens />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};
