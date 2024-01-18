import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TambahPasien = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tambahPasien}>
      <View style={styles.tambahPasienChild} />
      <Text style={[styles.rekamMedis, styles.rekamMedisTypo]}>
        Rekam Medis
      </Text>
      <View style={[styles.tambahPasienItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardPasien, styles.dashboardTypo]}>
        DashBoard / Pasien
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={styles.tambahPasienChild} />
      <Text style={[styles.rekamMedis, styles.rekamMedisTypo]}>
        Rekam Medis
      </Text>
      <View style={[styles.tambahPasienItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardTambah, styles.dashboardTypo]}>
        DashBoard / Tambah Data Pasien
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.tambahPasienChild1, styles.tambahPosition]} />
      <Pressable
        style={[styles.backParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("DataPasien")}
      >
        <Text style={styles.back}>back</Text>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupItemBorder]} />
        <View style={[styles.kembaliWrapper, styles.kembaliLayout]}>
          <Text style={[styles.kembali, styles.kembaliLayout]}>Kembali</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("DataPasien")}
      >
        <View style={styles.groupInner} />
        <Text style={[styles.simpan, styles.simpanTypo]}>SIMPAN</Text>
      </Pressable>
      <View style={[styles.tambahPasienChild2, styles.tambahChildPosition]} />
      <View style={[styles.tambahPasienChild3, styles.tambahChildPosition]} />
      <Text style={[styles.tambahDataPasien, styles.rekamMedisTypo]}>
        Tambah Data Pasien
      </Text>
      <Text style={[styles.namaPasien, styles.alamatTypo]}>Nama Pasien</Text>
      <Text style={[styles.jenisKelamin, styles.alamatTypo]}>
        Jenis Kelamin
      </Text>
      <Text style={[styles.tanggalLahir, styles.alamatTypo]}>
        Tanggal Lahir
      </Text>
      <Text style={[styles.noTelepon, styles.alamatTypo]}>No Telepon</Text>
      <Text style={[styles.alamat, styles.alamatTypo]}>Alamat</Text>
      <Text style={[styles.lakiLaki, styles.lakiTypo]}>Laki-laki</Text>
      <Text style={[styles.perempuan, styles.lakiTypo]}>Perempuan</Text>
      <View style={[styles.tambahPasienChild4, styles.tambahChildLayout]} />
      <View style={[styles.tambahPasienChild5, styles.tambahChildLayout]} />
      <View style={styles.tambahPasienChild6} />
      <View style={[styles.tambahPasienChild7, styles.home12Layout]} />
      <Image
        style={styles.user12}
        contentFit="cover"
        source={require("../assets/user-1-2.png")}
      />
      <Image
        style={styles.more1Icon}
        contentFit="cover"
        source={require("../assets/more-1.png")}
      />
      <TextInput
        style={[styles.groupTextinput, styles.tambahChildLayout]}
        placeholder="Nama Pasien"
        mode="flat"
        placeholderTextColor="#9e9e9e"
        theme={{
          fonts: {
            regular: { fontFamily: "Inter", fontWeight: "Extra Light" },
          },
          colors: { text: "#9e9e9e" },
        }}
      />
      <Text style={[styles.noTelepon1, styles.textTypo]}>No Telepon</Text>
      <Text style={[styles.alamat1, styles.textTypo]}>Alamat</Text>
      <Text style={[styles.text, styles.textTypo]}>00-00-00</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.tambahPasienChild8, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.home12, styles.home12Layout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home-1-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rekamMedisTypo: {
    height: 26,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tambahPosition: {
    width: 343,
    left: 9,
    position: "absolute",
  },
  dashboardTypo: {
    height: 16,
    color: Color.colorDarkgray_200,
    left: 51,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupItemLayout: {
    height: 28,
    width: 109,
    position: "absolute",
  },
  groupItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  kembaliLayout: {
    width: 74,
    height: 24,
    position: "absolute",
  },
  simpanTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  tambahChildPosition: {
    width: 310,
    top: 117,
    position: "absolute",
  },
  alamatTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  lakiTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 87,
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tambahChildLayout: {
    height: 36,
    width: 278,
    position: "absolute",
  },
  home12Layout: {
    height: 22,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  ellipseIconPosition: {
    width: 20,
    left: 52,
    position: "absolute",
  },
  tambahPasienChild: {
    top: -20,
    left: -26,
    borderRadius: Border.br_3xs,
    width: 446,
    height: 75,
    backgroundColor: Color.colorRoyalblue,
    position: "absolute",
  },
  rekamMedis: {
    top: 17,
    left: 95,
    width: 170,
  },
  tambahPasienItem: {
    top: 61,
    backgroundColor: Color.colorDarkturquoise,
    height: 33,
    borderRadius: Border.br_8xs,
  },
  dashboardPasien: {
    width: 173,
    top: 65,
  },
  speedometer1Icon: {
    left: 17,
    width: 29,
    height: 25,
    top: 65,
    position: "absolute",
  },
  dashboardTambah: {
    top: 69,
    width: 301,
  },
  tambahPasienChild1: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
  },
  back: {
    left: 13,
    width: 61,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 4,
    color: Color.colorDarkgray_200,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild: {
    left: 69,
    borderRightWidth: 1,
    width: 1,
    height: 29,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
    height: 28,
    width: 109,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  kembali: {
    left: 0,
    top: 0,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 74,
    color: Color.colorDarkgray_200,
  },
  kembaliWrapper: {
    left: 21,
    top: 4,
  },
  backParent: {
    left: 135,
    top: 659,
    width: 109,
  },
  groupInner: {
    backgroundColor: Color.colorSkyblue,
    borderColor: Color.colorSkyblue,
    borderRadius: Border.br_9xs,
    width: 82,
    borderWidth: 1,
    left: 0,
    borderStyle: "solid",
    top: 0,
    height: 28,
    position: "absolute",
  },
  simpan: {
    left: 3,
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    left: 253,
    width: 82,
    height: 28,
    top: 659,
    position: "absolute",
  },
  tambahPasienChild2: {
    left: 25,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    height: 526,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  tambahPasienChild3: {
    height: 43,
    left: 26,
    backgroundColor: Color.colorRoyalblue,
  },
  tambahDataPasien: {
    top: 125,
    left: 72,
    width: 216,
  },
  namaPasien: {
    top: 170,
    left: 47,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  jenisKelamin: {
    top: 240,
    left: 47,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  tanggalLahir: {
    top: 318,
    left: 48,
  },
  noTelepon: {
    top: 388,
    left: 52,
  },
  alamat: {
    top: 458,
    left: 52,
  },
  lakiLaki: {
    top: 262,
  },
  perempuan: {
    top: 289,
  },
  tambahPasienChild4: {
    top: 345,
    left: 41,
    height: 36,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  tambahPasienChild5: {
    top: 415,
    left: 41,
    height: 36,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  tambahPasienChild6: {
    top: 485,
    height: 139,
    width: 278,
    left: 41,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  tambahPasienChild7: {
    top: 764,
    left: 318,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 23,
  },
  user12: {
    top: 763,
    left: 321,
    width: 18,
    height: 21,
    position: "absolute",
  },
  more1Icon: {
    top: 765,
    left: 171,
    width: 21,
    height: 21,
    position: "absolute",
  },
  groupTextinput: {
    top: 197,
    left: 44,
  },
  noTelepon1: {
    top: 423,
    width: 115,
    left: 52,
  },
  alamat1: {
    top: 500,
    left: 62,
    width: 57,
    height: 21,
  },
  text: {
    top: 353,
    left: 59,
  },
  ellipseIcon: {
    top: 264,
    height: 18,
  },
  tambahPasienChild8: {
    top: 292,
    height: 19,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home12: {
    top: 663,
    width: 22,
    left: 26,
  },
  tambahPasien: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TambahPasien;
