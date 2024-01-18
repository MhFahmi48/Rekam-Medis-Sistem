import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TambahRekamMedis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tambahRekamMedis}>
      <View style={styles.tambahRekamMedisChild} />
      <Text style={[styles.rekamMedis, styles.rekamTypo]}>Rekam Medis</Text>
      <View style={[styles.tambahRekamMedisItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardPasien, styles.dashboardTypo]}>
        DashBoard / Pasien
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={styles.tambahRekamMedisChild} />
      <Text style={[styles.rekamMedis, styles.rekamTypo]}>Rekam Medis</Text>
      <View style={[styles.tambahRekamMedisItem, styles.tambahPosition]} />
      <Text style={[styles.dashboardTambah, styles.dashboardTypo]}>
        DashBoard / Tambah Rekam Medis
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.tambahRekamMedisChild1, styles.tambahPosition]} />
      <View
        style={[styles.tambahRekamMedisChild2, styles.tambahChildPosition]}
      />
      <View
        style={[styles.tambahRekamMedisChild3, styles.tambahChildPosition]}
      />
      <Text style={[styles.tambahDataRekam, styles.rekamTypo]}>
        Tambah Data Rekam Medis
      </Text>
      <View style={[styles.tambahRekamMedisChild4, styles.home12Layout]} />
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
      <View style={[styles.namaPasienParent, styles.parentLayout]}>
        <Text style={[styles.namaPasien, styles.keluhanTypo]}>Nama Pasien</Text>
        <TextInput
          style={[styles.groupChild, styles.groupLayout]}
          mode="outlined"
          placeholderTextColor="#9e9e9e"
          theme={{
            fonts: {
              regular: { fontFamily: "Inter", fontWeight: "Extra Light" },
            },
            colors: { text: "#9e9e9e" },
          }}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.diagnosaParent, styles.groupViewLayout]}>
          <Text style={[styles.diagnosa, styles.keluhanTypo]}>Diagnosa</Text>
          <View style={[styles.groupItem, styles.groupChildBorder]} />
          <Text style={[styles.diagnosa1, styles.keluhan1Typo]}>Diagnosa</Text>
        </View>
      </View>
      <Text style={[styles.keluhan, styles.keluhanTypo]}>Keluhan</Text>
      <View style={[styles.tambahRekamMedisChild5, styles.groupChildBorder]} />
      <Text style={[styles.keluhan1, styles.keluhan1Typo]}>Keluhan</Text>
      <View style={[styles.tanggalPeriksaParent, styles.parentLayout]}>
        <Text style={[styles.tanggalPeriksa, styles.keluhanTypo]}>
          Tanggal Periksa
        </Text>
        <View style={[styles.groupInner, styles.groupChildBorder]} />
        <Text style={[styles.hhbbtttt, styles.keluhan1Typo]}>HH/BB/TTTT</Text>
      </View>
      <Pressable
        style={[styles.backParent, styles.backParentLayout]}
        onPress={() => navigation.navigate("DataRekamMedis")}
      >
        <Text style={styles.back}>back</Text>
        <View style={styles.lineView} />
        <View style={[styles.groupChild1, styles.backParentLayout]} />
        <View style={[styles.kembaliWrapper, styles.kembaliLayout]}>
          <Text style={[styles.kembali, styles.kembaliLayout]}>Kembali</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChild2Layout]}
        onPress={() => navigation.navigate("DataRekamMedis")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.simpan, styles.simpanTypo]}>Simpan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rekamTypo: {
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
  home12Layout: {
    height: 22,
    position: "absolute",
  },
  parentLayout: {
    height: 63,
    width: 278,
    left: 44,
    position: "absolute",
  },
  keluhanTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    top: 27,
    width: 278,
    position: "absolute",
  },
  groupViewLayout: {
    width: 280,
    height: 63,
    position: "absolute",
  },
  groupChildBorder: {
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  keluhan1Typo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  backParentLayout: {
    height: 28,
    width: 109,
    position: "absolute",
  },
  kembaliLayout: {
    width: 74,
    height: 24,
    position: "absolute",
  },
  groupChild2Layout: {
    width: 82,
    height: 28,
    position: "absolute",
  },
  simpanTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  tambahRekamMedisChild: {
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
  tambahRekamMedisItem: {
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
  tambahRekamMedisChild1: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
  },
  tambahRekamMedisChild2: {
    left: 25,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    height: 526,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  tambahRekamMedisChild3: {
    height: 43,
    left: 26,
    backgroundColor: Color.colorRoyalblue,
  },
  tambahDataRekam: {
    top: 125,
    left: 40,
    width: 281,
  },
  tambahRekamMedisChild4: {
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
    width: 22,
    top: 659,
    left: 26,
  },
  more1Icon: {
    top: 765,
    left: 171,
    width: 21,
    height: 21,
    position: "absolute",
  },
  namaPasien: {
    left: 1,
    top: 0,
  },
  groupChild: {
    left: 0,
  },
  namaPasienParent: {
    top: 170,
  },
  diagnosa: {
    left: 8,
    top: 0,
  },
  groupItem: {
    left: 2,
    height: 36,
    top: 27,
    width: 278,
    position: "absolute",
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorWhite,
  },
  diagnosa1: {
    width: 115,
    top: 35,
    fontWeight: "200",
    left: 0,
  },
  diagnosaParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 317,
    left: 44,
    width: 280,
  },
  keluhan: {
    top: 390,
    left: 51,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  tambahRekamMedisChild5: {
    top: 417,
    height: 139,
    width: 278,
    borderRadius: Border.br_9xs,
    left: 44,
    borderColor: Color.colorDarkgray_200,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  keluhan1: {
    top: 431,
    left: 46,
    width: 92,
    height: 21,
  },
  tanggalPeriksa: {
    left: 0,
    top: 0,
  },
  groupInner: {
    height: 36,
    top: 27,
    width: 278,
    position: "absolute",
    left: 0,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorWhite,
  },
  hhbbtttt: {
    left: 6,
    top: 35,
    fontWeight: "200",
  },
  tanggalPeriksaParent: {
    top: 240,
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
  lineView: {
    left: 69,
    borderRightWidth: 1,
    width: 1,
    height: 29,
    top: 0,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  kembali: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: 74,
    left: 0,
    top: 0,
    color: Color.colorDarkgray_200,
  },
  kembaliWrapper: {
    left: 21,
    top: 4,
  },
  backParent: {
    left: 136,
    top: 659,
  },
  groupChild2: {
    backgroundColor: Color.colorSkyblue,
    borderColor: Color.colorSkyblue,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  simpan: {
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 9,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    left: 251,
    top: 659,
  },
  tambahRekamMedis: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TambahRekamMedis;
