import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Image
        style={[styles.registerChild, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Text style={[styles.username, styles.nohpFlexBox]}>Username</Text>
      <Image
        style={[styles.registerItem, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.tanggalLahir, styles.nohpFlexBox]}>
        Tanggal Lahir
      </Text>
      <Image
        style={[styles.registerInner, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.alamat, styles.nohpFlexBox]}>Alamat</Text>
      <Image
        style={[styles.rectangleIcon, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.email, styles.nohpFlexBox]}>Email</Text>
      <Image
        style={[styles.registerChild1, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.nohp, styles.nohpFlexBox]}>No.HP</Text>
      <Image
        style={[styles.registerChild2, styles.registerChild2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.nama, styles.namaPosition]}>Nama</Text>
      <Image
        style={[styles.registerChild3, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.kelamin, styles.nohpFlexBox]}>Kelamin</Text>
      <Image
        style={[styles.registerChild4, styles.registerChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={[styles.password, styles.nohpFlexBox]}>Password</Text>
      <Pressable
        style={[styles.rectangleParent, styles.registerChild2Position]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.groupChild, styles.register1Position]} />
        <Text style={[styles.register1, styles.register1Position]}>
          Register
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.registerChildLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.groupChild, styles.register1Position]} />
        <Text style={[styles.register1, styles.register1Position]}>
          Kembali
        </Text>
      </Pressable>
      <Image
        style={[styles.registerChild5, styles.namaPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Text style={styles.register2}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  registerChildLayout: {
    width: 264,
    left: 49,
    position: "absolute",
    height: 33,
  },
  nohpFlexBox: {
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  registerChild2Position: {
    left: 48,
    height: 33,
    width: 264,
    position: "absolute",
  },
  namaPosition: {
    left: 125,
    position: "absolute",
  },
  register1Position: {
    left: 0,
    width: 264,
    position: "absolute",
  },
  registerChild: {
    top: 172,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  username: {
    top: 180,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  registerItem: {
    top: 384,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  tanggalLahir: {
    top: 393,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  registerInner: {
    top: 543,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  alamat: {
    top: 552,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  rectangleIcon: {
    top: 437,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  email: {
    top: 446,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  registerChild1: {
    top: 490,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  nohp: {
    top: 499,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  registerChild2: {
    top: 278,
    borderRadius: Border.br_7xs,
  },
  nama: {
    top: 287,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    width: 110,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkgray_200,
  },
  registerChild3: {
    top: 331,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  kelamin: {
    top: 340,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  registerChild4: {
    top: 225,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  password: {
    top: 234,
    width: 110,
    fontSize: FontSize.size_mini,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    left: 126,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorDarkturquoise,
    height: 33,
    borderRadius: Border.br_7xs,
  },
  register1: {
    top: 8,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: 0,
  },
  rectangleParent: {
    top: 605,
  },
  rectangleGroup: {
    top: 667,
    height: 33,
  },
  registerChild5: {
    top: -3,
    borderRadius: Border.br_5xs,
    width: 101,
    height: 134,
  },
  register2: {
    marginLeft: -34,
    top: 131,
    left: "50%",
    fontSize: FontSize.size_lg,
    lineHeight: 20,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    textAlign: "center",
    color: Color.colorDarkgray_200,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register;
