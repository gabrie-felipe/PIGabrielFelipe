import { Button, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text> Essa é a página HOME </Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};
