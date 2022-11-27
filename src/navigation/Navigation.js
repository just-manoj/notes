import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from "../screens/List";
import NoteDetails from "../screens/NoteDetails";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="noteDetails" component={NoteDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
