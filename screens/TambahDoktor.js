import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TambahDoktor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tambahDoktor}>
      <View style={styles.tambahDoktorChild} />
      <Text style={[styles.rekamMedis, styles.rekamMedisTypo]}>
        Rekam Medis
      </Text>
      <View style={[styles.tambahDoktorItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardPasien, styles.dashboardTypo]}>
        DashBoard / Pasien
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={styles.tambahDoktorChild} />
      <Text style={[styles.rekamMedis, styles.rekamMedisTypo]}>
        Rekam Medis
      </Text>
      <View style={[styles.tambahDoktorItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardTambah, styles.dashboardTypo]}>
        DashBoard / Tambah Data Dokter
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.tambahDoktorChild1, styles.tambahPosition]} />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("DataDoktor")}
      >
        <View style={styles.groupChild} />
        <Text style={styles.simpan}>SIMPAN</Text>
      </Pressable>
      <View style={[styles.tambahDoktorChild2, styles.tambahChildPosition]} />
      <View style={[styles.tambahDoktorChild3, styles.tambahChildPosition]} />
      <Text style={[styles.tambahDataDokter, styles.rekamMedisTypo]}>
        Tambah Data Dokter
      </Text>
      <Text style={[styles.namaDokter, styles.emailTypo]}>Nama Dokter</Text>
      <Text style={[styles.jenisKelamin, styles.emailTypo]}>Jenis Kelamin</Text>
      <Text style={[styles.email, styles.emailTypo]}>{`Email `}</Text>
      <Text style={[styles.noTelepon, styles.emailTypo]}>No Telepon</Text>
      <Text style={[styles.alamat, styles.emailTypo]}>Alamat</Text>
      <Text style={[styles.lakiLaki, styles.lakiTypo]}>Laki-laki</Text>
      <Text style={[styles.perempuan, styles.lakiTypo]}>Perempuan</Text>
      <View style={[styles.tambahDoktorChild4, styles.tambahChildLayout]} />
      <View style={[styles.tambahDoktorChild5, styles.tambahChildLayout]} />
      <View style={styles.tambahDoktorChild6} />
      <View style={[styles.tambahDoktorChild7, styles.home12Layout]} />
      <Image
        style={styles.user12}
        contentFit="cover"
        source={require("../assets/user-1-2.png")}
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
      <Image
        style={styles.more1Icon}
        contentFit="cover"
        source={require("../assets/more-1.png")}
      />
      <TextInput
        style={[styles.groupTextinput, styles.tambahChildLayout]}
        placeholder="Nama Dokter"
        mode="flat"
        placeholderTextColor="#9e9e9e"
        theme={{
          fonts: {
            regular: { fontFamily: "Inter", fontWeight: "Extra Light" },
          },
          colors: { text: "#9e9e9e" },
        }}
      />
      <Text style={[styles.noTelepon1, styles.email1Typo]}>No Telepon</Text>
      <Text style={[styles.alamat1, styles.email1Typo]}>Alamat</Text>
      <Text style={[styles.email1, styles.email1Typo]}>{`Email `}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.tambahDoktorChild8, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.backParent, styles.backParentLayout]}
        onPress={() => navigation.navigate("DataDoktor")}
      >
        <Text style={styles.back}>back</Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <View style={[styles.groupInner, styles.backParentLayout]} />
        <View style={[styles.kembaliWrapper, styles.kembaliLayout]}>
          <Text style={[styles.kembali, styles.kembaliLayout]}>Kembali</Text>
        </View>
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
    fontFamily: FontFamily.interRegular,
    left: 51,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tambahChildPosition: {
    width: 310,
    top: 117,
    position: "absolute",
  },
  emailTypo: {
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
  email1Typo: {
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
  backParentLayout: {
    width: 109,
    height: 28,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
  },
  kembaliLayout: {
    width: 74,
    height: 24,
    position: "absolute",
  },
  tambahDoktorChild: {
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
  tambahDoktorItem: {
    top: 61,
    backgroundColor: Color.colorDarkturquoise,
    height: 33,
    borderRadius: Border.br_8xs,
    width: 343,
    left: 9,
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
  tambahDoktorChild1: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
    width: 343,
    left: 9,
  },
  groupChild: {
    backgroundColor: Color.colorSkyblue,
    borderColor: Color.colorSkyblue,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    height: 28,
    width: 82,
    position: "absolute",
  },
  simpan: {
    left: 3,
    textAlign: "left",
    top: 4,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleParent: {
    left: 253,
    height: 28,
    width: 82,
    top: 659,
    position: "absolute",
  },
  tambahDoktorChild2: {
    left: 25,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    height: 526,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
  },
  tambahDoktorChild3: {
    left: 26,
    height: 43,
    backgroundColor: Color.colorRoyalblue,
  },
  tambahDataDokter: {
    top: 125,
    left: 72,
    width: 216,
  },
  namaDokter: {
    top: 170,
    left: 46,
  },
  jenisKelamin: {
    top: 240,
    left: 47,
  },
  email: {
    top: 318,
    left: 52,
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
  tambahDoktorChild4: {
    top: 345,
    left: 41,
    height: 36,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  tambahDoktorChild5: {
    top: 415,
    left: 41,
    height: 36,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  tambahDoktorChild6: {
    top: 485,
    height: 139,
    width: 278,
    left: 41,
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  tambahDoktorChild7: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  home12: {
    left: 36,
    top: 663,
    width: 22,
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
  email1: {
    top: 353,
    left: 63,
  },
  ellipseIcon: {
    top: 264,
    height: 18,
  },
  tambahDoktorChild8: {
    top: 292,
    height: 19,
  },
  back: {
    left: 13,
    width: 61,
    height: 24,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    top: 4,
    color: Color.colorDarkgray_200,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupItem: {
    left: 69,
    borderRightWidth: 1,
    width: 1,
    height: 29,
    top: 0,
    borderColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderWidth: 1,
    left: 0,
    width: 109,
    top: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  kembali: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 74,
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkgray_200,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  kembaliWrapper: {
    left: 21,
    width: 74,
    top: 4,
  },
  backParent: {
    left: 136,
    width: 109,
    top: 659,
  },
  tambahDoktor: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TambahDoktor;
