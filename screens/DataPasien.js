import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DataPasien = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dataPasien}>
      <View style={styles.dataPasienChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dataPasienItem, styles.dataPosition]} />
      <Text style={styles.dashboardPasien}>DashBoard / Pasien</Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.dataPasienInner, styles.dataPosition]} />
      <Text style={styles.dataPasien1}>Data Pasien</Text>
      <Image
        style={[styles.appointment1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/appointment-1.png")}
      />
      <View style={[styles.rectangleView, styles.dataChildLayout3]} />
      <Text style={[styles.namaBudi, styles.telpTypo]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin, styles.telpTypo]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir, styles.textTypo1]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.noTelp, styles.telpTypo]}>
        No Telp : 085356362697
      </Text>
      <Text style={[styles.alamatJlnenas, styles.telpTypo]}>
        Alamat : Jl.Nenas
      </Text>
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <View style={styles.dataPasienChild1} />
      <Text style={[styles.back, styles.backLayout]}>back</Text>
      <Text style={[styles.next, styles.backTypo]}>next</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.dataPasienChild2, styles.lineViewLayout]} />
      <Text style={[styles.unduh, styles.telpTypo]}>unduh</Text>
      <Image
        style={[styles.file21, styles.file21Layout]}
        contentFit="cover"
        source={require("../assets/file-2-1.png")}
      />
      <View style={[styles.dataPasienChild3, styles.dataChildLayout2]} />
      <View style={[styles.dataPasienChild4, styles.dataChildLayout2]} />
      <Image
        style={[styles.trashCan1Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={styles.dataPasienChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dataPasienItem, styles.dataPosition]} />
      <Text style={styles.dashboardPasien}>DashBoard / Pasien</Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <Text style={styles.dataPasien1}>Data Pasien</Text>
      <Image
        style={[styles.appointment1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/appointment-1.png")}
      />
      <View style={[styles.dataPasienChild7, styles.dataChildLayout3]} />
      <Text style={[styles.namaBudi1, styles.telpTypo]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin1, styles.jenisTypo]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir1, styles.tanggalTypo]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.noTelp1, styles.textTypo1]}>
        No Telp : 085356362697
      </Text>
      <Text style={[styles.alamatJlnenas1, styles.telpTypo]}>
        Alamat : Jl.Nenas
      </Text>
      <Text style={[styles.emailBudisubudigmailcom, styles.jenisTypo]}>
        Email : BudiSubudi@gmail.com
      </Text>
      <View style={[styles.dataPasienChild8, styles.file21Layout]} />
      <Image
        style={[styles.user12, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/user-1-2.png")}
      />
      <Pressable
        style={[styles.home12, styles.file21Layout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home-1-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.more1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/more-1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <View style={styles.dataPasienChild1} />
      <Text style={[styles.back, styles.backLayout]}>back</Text>
      <Text style={[styles.next, styles.backTypo]}>next</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("TambahPasien")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.tambahData, styles.backLayout]}>
          + Tambah data
        </Text>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.tambahData, styles.backLayout]}>
          + Tambah data
        </Text>
      </Pressable>
      <View style={[styles.dataPasienChild2, styles.lineViewLayout]} />
      <Text style={[styles.unduh, styles.telpTypo]}>unduh</Text>
      <Image
        style={[styles.file21, styles.file21Layout]}
        contentFit="cover"
        source={require("../assets/file-2-1.png")}
      />
      <View style={[styles.dataPasienChild3, styles.dataChildLayout2]} />
      <View style={[styles.dataPasienChild4, styles.dataChildLayout2]} />
      <Image
        style={[styles.trashCan1Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataPasienChild14, styles.namaPedroPosition]} />
      <Text style={[styles.namaBudi2, styles.telpTypo]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin2, styles.telpTypo]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir2, styles.noTelp3Typo]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.noTelp2, styles.telpTypo]}>
        No Telp : 085356362697
      </Text>
      <Text style={[styles.alamatJlnenas2, styles.telpTypo]}>
        Alamat : Jl.Nenas
      </Text>
      <View style={[styles.dataPasienChild15, styles.dataChildLayout1]} />
      <View style={[styles.dataPasienChild16, styles.dataChildLayout1]} />
      <Image
        style={[styles.trashCan5Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataPasienChild17, styles.dataChildLayout3]} />
      <Text style={[styles.namaPedro, styles.namaPedroPosition]}>
        Nama : pedro
      </Text>
      <Text style={[styles.jenisKelamin3, styles.jenisTypo]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir3, styles.tanggalTypo]}>
        Tanggal lahir : 10-10-1999
      </Text>
      <Text style={[styles.noTelp3, styles.noTelp3Typo]}>
        No Telp : 081354362789
      </Text>
      <Text style={[styles.alamatJlikhlas, styles.telpTypo]}>
        Alamat : Jl.Ikhlas
      </Text>
      <Text style={[styles.emailPedrosagmailcom, styles.jenisTypo]}>
        Email : Pedrosa@gmail.com
      </Text>
      <Text style={[styles.text2, styles.textTypo]}>2</Text>
      <View style={[styles.dataPasienChild15, styles.dataChildLayout1]} />
      <View style={[styles.dataPasienChild16, styles.dataChildLayout1]} />
      <Image
        style={[styles.trashCan5Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataPasienChild20, styles.dataChildPosition]} />
      <Text style={[styles.namaBudi3, styles.namaBudi3Typo]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin4, styles.namaBudi3Typo]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir4, styles.namaBudi3Typo]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.noTelp4, styles.noTelp4Typo]}>
        No Telp : 085356362697
      </Text>
      <Text style={[styles.alamatJlnenas3, styles.noTelp4Typo]}>
        Alamat : Jl.Nenas
      </Text>
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
      <View style={[styles.dataPasienChild21, styles.dataChildLayout]} />
      <View style={[styles.dataPasienChild22, styles.dataChildLayout]} />
      <Image
        style={[styles.trashCan7Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataPasienChild23, styles.dataChildPosition]} />
      <Text style={[styles.namaPutri, styles.noTelp5Typo]}>Nama : Putri</Text>
      <Text style={[styles.jenisKelamin5, styles.telpTypo]}>
        Jenis Kelamin : Perempuan
      </Text>
      <Text style={[styles.tanggalLahir5, styles.jenisTypo]}>
        Tanggal lahir : 13-07-2003
      </Text>
      <Text style={[styles.noTelp5, styles.noTelp5Typo]}>
        No Telp : 08952322228
      </Text>
      <Text style={[styles.alamatJlnenas4, styles.telpTypo]}>
        Alamat : Jl.Nenas
      </Text>
      <Text style={[styles.emailPutriee121gmailcom, styles.noTelp5Typo]}>
        Email : Putriee121@gmail.com
      </Text>
      <View style={[styles.dataPasienChild21, styles.dataChildLayout]} />
      <View style={[styles.dataPasienChild22, styles.dataChildLayout]} />
      <Image
        style={[styles.trashCan7Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dataPosition: {
    width: 343,
    left: 9,
    position: "absolute",
  },
  iconLayout1: {
    height: 21,
    position: "absolute",
  },
  dataChildLayout3: {
    width: 277,
    left: 61,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  telpTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  textTypo1: {
    top: 226,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  backLayout: {
    height: 24,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  backTypo: {
    top: 727,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDarkgray_200,
  },
  lineViewLayout: {
    height: 29,
    position: "absolute",
  },
  file21Layout: {
    height: 22,
    position: "absolute",
  },
  dataChildLayout2: {
    width: 34,
    backgroundColor: Color.colorGainsboro,
    top: 291,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashIconLayout: {
    height: 20,
    width: 19,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  jenisTypo: {
    left: 65,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tanggalTypo: {
    left: 64,
    width: 229,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChildLayout: {
    width: 149,
    height: 28,
    position: "absolute",
  },
  namaPedroPosition: {
    top: 349,
    position: "absolute",
  },
  noTelp3Typo: {
    top: 424,
    width: 229,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dataChildLayout1: {
    top: 489,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo: {
    left: 32,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dataChildPosition: {
    left: 62,
    width: 277,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  namaBudi3Typo: {
    left: 76,
    width: 229,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  noTelp4Typo: {
    left: 78,
    width: 229,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dataChildLayout: {
    top: 680,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  noTelp5Typo: {
    left: 68,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dataPasienChild: {
    top: -20,
    left: -26,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorRoyalblue,
    width: 446,
    height: 75,
    position: "absolute",
  },
  rekamMedis: {
    top: 17,
    left: 95,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 170,
    height: 26,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dataPasienItem: {
    top: 61,
    backgroundColor: Color.colorDarkturquoise,
    height: 33,
    borderRadius: Border.br_8xs,
    width: 343,
    left: 9,
  },
  dashboardPasien: {
    width: 173,
    height: 16,
    color: Color.colorDarkgray_200,
    left: 51,
    fontFamily: FontFamily.interRegular,
    top: 65,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  speedometer1Icon: {
    left: 17,
    width: 29,
    height: 25,
    top: 65,
    position: "absolute",
  },
  dataPasienInner: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
    width: 343,
    left: 9,
  },
  dataPasien1: {
    top: 112,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDarkgray_200,
    left: 51,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  appointment1Icon: {
    left: 21,
    width: 21,
    top: 111,
  },
  rectangleView: {
    height: 171,
    top: 151,
    position: "absolute",
  },
  namaBudi: {
    top: 164,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  jenisKelamin: {
    top: 195,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  tanggalLahir: {
    width: 229,
    left: 75,
  },
  noTelp: {
    top: 257,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  alamatJlnenas: {
    top: 288,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  text: {
    left: 31,
  },
  dataPasienChild1: {
    left: 209,
    width: 127,
    height: 28,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    top: 723,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  back: {
    left: 219,
    width: 46,
    top: 727,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDarkgray_200,
  },
  next: {
    left: 286,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  lineView: {
    left: 272,
    borderRightWidth: 1,
    width: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    height: 29,
    top: 723,
  },
  dataPasienChild2: {
    top: 105,
    left: 247,
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkgray_100,
    width: 92,
  },
  unduh: {
    top: 109,
    left: 280,
    width: 61,
    height: 19,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  file21: {
    left: 254,
    width: 21,
    top: 111,
  },
  dataPasienChild3: {
    left: 298,
  },
  dataPasienChild4: {
    left: 260,
  },
  trashCan1Icon: {
    top: 296,
    left: 306,
    height: 20,
    width: 19,
  },
  edit1Icon: {
    top: 295,
    left: 267,
    width: 20,
  },
  dataPasienChild7: {
    top: 145,
    height: 177,
    position: "absolute",
  },
  namaBudi1: {
    left: 67,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 151,
    position: "absolute",
  },
  jenisKelamin1: {
    top: 176,
    width: 229,
  },
  tanggalLahir1: {
    top: 201,
  },
  noTelp1: {
    left: 67,
    width: 229,
  },
  alamatJlnenas1: {
    top: 276,
    left: 67,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  emailBudisubudigmailcom: {
    top: 251,
    width: 267,
  },
  dataPasienChild8: {
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
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home12: {
    left: 173,
    top: 722,
    width: 22,
  },
  more1Icon: {
    top: 765,
    left: 171,
    width: 21,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSkyblue,
    borderColor: Color.colorSkyblue,
    borderWidth: 1,
    width: 149,
    borderStyle: "solid",
  },
  tambahData: {
    top: 4,
    left: 7,
    width: 134,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
  },
  rectangleParent: {
    width: 149,
    top: 723,
    left: 9,
  },
  dataPasienChild14: {
    height: 171,
    width: 277,
    left: 61,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  namaBudi2: {
    top: 362,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  jenisKelamin2: {
    top: 393,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  tanggalLahir2: {
    left: 75,
  },
  noTelp2: {
    top: 455,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  alamatJlnenas2: {
    top: 486,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 75,
    position: "absolute",
  },
  dataPasienChild15: {
    left: 298,
  },
  dataPasienChild16: {
    left: 260,
  },
  trashCan5Icon: {
    top: 494,
    left: 306,
    height: 20,
    width: 19,
  },
  edit5Icon: {
    top: 493,
    left: 267,
    width: 20,
  },
  dataPasienChild17: {
    top: 344,
    height: 176,
    position: "absolute",
  },
  namaPedro: {
    left: 67,
    width: 229,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  jenisKelamin3: {
    top: 374,
    width: 229,
  },
  tanggalLahir3: {
    top: 399,
  },
  noTelp3: {
    left: 67,
  },
  alamatJlikhlas: {
    top: 474,
    left: 67,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  emailPedrosagmailcom: {
    top: 449,
    width: 267,
  },
  text2: {
    top: 419,
  },
  dataPasienChild20: {
    top: 540,
    height: 171,
  },
  namaBudi3: {
    top: 553,
  },
  jenisKelamin4: {
    top: 584,
  },
  tanggalLahir4: {
    top: 615,
  },
  noTelp4: {
    top: 646,
  },
  alamatJlnenas3: {
    top: 677,
  },
  text3: {
    top: 615,
  },
  dataPasienChild21: {
    left: 301,
  },
  dataPasienChild22: {
    left: 263,
  },
  trashCan7Icon: {
    top: 685,
    left: 309,
  },
  edit7Icon: {
    top: 684,
    left: 270,
  },
  dataPasienChild23: {
    top: 536,
    height: 175,
  },
  namaPutri: {
    top: 540,
    width: 229,
  },
  jenisKelamin5: {
    top: 565,
    left: 66,
    width: 229,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  tanggalLahir5: {
    top: 590,
    width: 229,
  },
  noTelp5: {
    top: 615,
    width: 229,
  },
  alamatJlnenas4: {
    top: 665,
    left: 70,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  emailPutriee121gmailcom: {
    top: 640,
    width: 267,
  },
  dataPasien: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DataPasien;
