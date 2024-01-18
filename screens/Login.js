import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.password, styles.login1FlexBox]}>Password</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Register")}
      >
        <Pressable style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.login1, styles.login1FlexBox]}>Register</Text>
      </Pressable>
      <TextInput
        style={[styles.loginChild, styles.loginPosition]}
        placeholder="Username"
        disabled={false}
        mode="flat"
        left={<TextInput.Icon style={{ marginTop: "50%" }} name="user 1" />}
        placeholderTextColor="#9e9e9e"
        underlineColor="#fff"
        activeUnderlineColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Regular" } },
          colors: { text: "#9e9e9e" },
        }}
      />
      <Image
        style={styles.padlock1Icon}
        contentFit="cover"
        source={require("../assets/padlock-1.png")}
      />
      <Image
        style={[styles.loginItem, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.loginInner}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={[styles.rekamMedis, styles.klinikTypo]}>Rekam Medis</Text>
      <Text style={[styles.klinik, styles.klinikTypo]}>KLINIK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 33,
    width: 264,
  },
  groupLayout: {
    borderRadius: Border.br_7xs,
    top: 0,
    left: 0,
    height: 33,
    width: 264,
    position: "absolute",
  },
  login1FlexBox: {
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  loginPosition: {
    top: 346,
    position: "absolute",
  },
  klinikTypo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
  },
  password: {
    top: 9,
    left: 36,
    fontSize: FontSize.size_mini,
    width: 110,
    color: Color.colorDarkgray_200,
  },
  rectangleParent: {
    top: 403,
    left: 49,
    width: 264,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorDarkturquoise,
  },
  login1: {
    top: 8,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    width: 264,
  },
  rectangleGroup: {
    top: 490,
    left: 49,
    width: 264,
    position: "absolute",
  },
  rectangleContainer: {
    top: 543,
    left: 48,
    position: "absolute",
  },
  loginChild: {
    height: 33,
    width: 264,
    left: 49,
  },
  padlock1Icon: {
    top: 408,
    left: 55,
    width: 20,
    height: 21,
    position: "absolute",
  },
  loginItem: {
    left: 86,
    maxWidth: "100%",
    height: 90,
    overflow: "hidden",
  },
  loginInner: {
    top: -34,
    left: 77,
    borderRadius: Border.br_5xs,
    width: 209,
    height: 279,
    position: "absolute",
  },
  rekamMedis: {
    marginLeft: -55,
    top: 289,
    left: "50%",
    color: Color.colorDarkgray_200,
  },
  klinik: {
    top: 242,
    left: 137,
    color: "rgba(0, 0, 0, 0.8)",
    width: 88,
    height: 27,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
