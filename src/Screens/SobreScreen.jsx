import { Button, Text, View } from "react-native";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Essa é a página SOBRE </Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
