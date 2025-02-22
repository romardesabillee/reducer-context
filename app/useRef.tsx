import { useEffect, useRef, useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
  const count = useRef(0);
  const viewElement = useRef(null);
  const textInputRef = useRef(null);
  // const [state, setState] = useState(0);

  useEffect(() => {
    (viewElement.current as any).style.backgroundColor = 'pink';
    (textInputRef.current as any).focus();
  }, [])

  console.log(count.current);

  return (
    <View ref={viewElement} style={{ padding: 20 }}>
      <Text style={{ fontSize: 100 }}>{count.current}</Text>
      <Button 
        onPress={() => {
          count.current += 1;
          // setState(state + 1);
        }}
        title="Click Me!"
      />
      <TextInput 
        ref={textInputRef} 
        style={{ borderColor: '#000', borderWidth: 1, marginTop: 20 }} />
    </View>
  );
}
