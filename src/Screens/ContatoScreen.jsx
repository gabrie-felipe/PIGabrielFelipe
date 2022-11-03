import { useState } from "react";
import { Text, View } from "react-native";
import {
  Button,
  Card,
  TextInput,
  ToggleButton,
  TouchableRipple,
  Switch,
  RadioButton,
} from "react-native-paper";
import { CheckBox } from "react-native-web";

export const ContatoScreen = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("left");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [radio, setRadio] = useState("first");

  return (
    <View>
      <Text>Pagina Contato</Text>

      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <Text>card</Text>
      <Card>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Text>checkbox</Text>
      <CheckBox label="Item" status="checked" />

      <Text>
        O grupo de alternância permite controlar um grupo de botões de
        alternância
      </Text>
      <ToggleButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <ToggleButton icon="format-align-left" value="left" />
        <ToggleButton icon="format-align-right" value="right" />
      </ToggleButton.Group>

      <Text>Um wrapper para visualizações que devem responder a toques</Text>
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text>muda cor ao toque</Text>
      </TouchableRipple>

      <Text>
        Switch é uma alternância visual entre dois estados mutuamente exclusivos
        — ligado e desligado.
      </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

      <Text>radio</Text>
      <RadioButton.Group
        onValueChange={(radio) => setRadio(radio)}
        radio={radio}
      >
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
      </RadioButton.Group>
      
    </View>
  );
};
