import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContatoScreen } from "../Screens/ContatoScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { SobreScreen } from "../Screens/SobreScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Sobre"} component={SobreScreen} />
    <Stack.Screen name={"Contato"} component={ContatoScreen}/>
    </Stack.Navigator>
  );
};
