import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput, ToggleButton } from "react-native-paper";

import { style } from "../lib/Style";

export const ContatoScreen = () => {
  /* const [text, setText] = useState("");*/
  const [value, setValue] = useState("left");
  const [fone, setFone] = useState("left");
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Pagina Contato</Text>

      <TextInput
        style={style.box}
        mode="outlined"
        label="Digite seu nome"
        placeholder="Nome inteiro!"
        right={<TextInput.Affix text="/100" />}
      />

      <TextInput
        style={style.box}
        mode="outlined"
        label="Digite seu email"
        placeholder="Ex: exemplo.12@gmail.com"
        right={<TextInput.Affix text="/50" />}
      />

      <TextInput
        style={style.box}
        mode="outlined"
        label="Digite seu telefone"
        placeholder="Número com DDD"
        right={<TextInput.Affix text="/12" />}
      />

      <ToggleButton.Row style={style.add} onFoneChange={(fone) => setFone(fone)} fone={fone}>
        <ToggleButton icon="person-remove-outline" value="left" />
        <ToggleButton icon="send-outline" value="right" />
      </ToggleButton.Row>

      <Button
        style={style.botao}
        icon="send-outline"
        mode="contained"
        onPress={() => navigation.navigate("Home")}
      >
        SALVAR
      </Button>
    </View>
  );
};
