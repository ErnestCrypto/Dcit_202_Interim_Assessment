import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Text style={{ color: "rgba(0,0,0,0.8)", fontSize: 24, marginTop: 20 }}>
        Welcome to
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 30,
          fontWeight: "600",
          marginBottom: 20,
        }}
      >
        TAGLINE
      </Text>

      <Image
        style={{
          width: 130,
          height: 130,
          marginBottom: 30,
          borderRadius: 100,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        }}
      />

      <View>
        <TextInput
          style={{
            height: 40,
            paddingLeft: 10,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            outline: "none",
            marginBottom: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Username"
        />

        <TextInput
          style={{
            height: 40,
            backgroundColor: "#e3e3e3",
            fontSize: 15,
            width: 230,
            paddingLeft: 10,
            outline: "none",
            marginTop: 10,
            borderBottomRightRadius: 10,
          }}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "rgb(255,40,45)",
          padding: 10,
          width: 230,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: "17", fontWeight: "700", color: "white" }}>
          SIGNUP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ marginTop: 10, fontWeight: "500", color: "gray" }}>
          Not a member?
          <Text style={{ color: "rgb(255,40,45)", fontWeight: "bold" }}>
            Signup
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
