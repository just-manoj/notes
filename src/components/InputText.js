import { View, TextInput } from "react-native";

const InputText = (props) => {
  // const { options } = props;

  return (
    <View style={{ flex: 1 }}>
      <TextInput {...props} autoFocus={true} />
    </View>
  );
};

export default InputText;
