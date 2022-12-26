import { View, TextInput } from "react-native";
import React from "react";

const InputText = React.forwardRef((props, ref) => {
  return (
    <View>
      <TextInput {...props} ref={ref} />
    </View>
  );
});

export default InputText;
