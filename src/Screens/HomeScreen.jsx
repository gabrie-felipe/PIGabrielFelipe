import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { style } from "../lib/Style";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text> Essa é a página HOME </Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
      <Button 
      mode="contained"
      style={style.botao}
     /* style={{width: "50%", marginBottom: 30}}*/
     
      onPress={() => navigation.navigate("Contato")}>
        Oi
        </Button>
    </View>
  );
};
