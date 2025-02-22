import { View, Text } from "react-native";
import { UserInfoContext } from "../app/_layout";
import { useContext } from "react";

export default function UserInfo() {
    const userInfoContext = useContext(UserInfoContext);
    // const { name, email } = useContext(UserInfoContext);

    return (
        <View>
            <Text>Name: {userInfoContext?.name}</Text>
            <Text>Email: {userInfoContext?.email}</Text>
        </View>
    )
}