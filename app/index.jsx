import { useReducer, useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import UserInfo from "../components/UserInfo";


export default function Index() {

  return (
    <View style={{ padding: 20 }}>
      <UserInfo />
    </View>
  );
}
