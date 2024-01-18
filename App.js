const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import TambahRekamMedis from "./screens/TambahRekamMedis";
import TambahDoktor from "./screens/TambahDoktor";
import TambahPasien from "./screens/TambahPasien";
import DataRekamMedis from "./screens/DataRekamMedis";
import DataPasien from "./screens/DataPasien";
import DataDoktor from "./screens/DataDoktor";
import Dashboard from "./screens/Dashboard";
import Register from "./screens/Register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TambahRekamMedis"
              component={TambahRekamMedis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TambahDoktor"
              component={TambahDoktor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TambahPasien"
              component={TambahPasien}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataRekamMedis"
              component={DataRekamMedis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataPasien"
              component={DataPasien}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataDoktor"
              component={DataDoktor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
