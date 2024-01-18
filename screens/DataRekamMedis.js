import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DataRekamMedis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dataRekamMedis}>
      <View style={styles.dataRekamMedisChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dataRekamMedisItem, styles.dataPosition]} />
      <Text style={[styles.dashboardPasien, styles.dashboardTypo]}>
        DashBoard / Pasien
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.dataRekamMedisInner, styles.dataPosition]} />
      <Text style={styles.rekamMedis1}>Rekam medis</Text>
      <Text style={[styles.namaBudi, styles.namaTypo1]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin, styles.namaTypo1]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir, styles.namaTypo1]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.back, styles.backLayout]}>back</Text>
      <Text style={[styles.next, styles.backTypo]}>next</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.dataRekamMedisChild1, styles.lineViewLayout]} />
      <Text style={styles.unduh}>unduh</Text>
      <Image
        style={[styles.file21, styles.file21Layout]}
        contentFit="cover"
        source={require("../assets/file-2-1.png")}
      />
      <View style={[styles.dataRekamMedisChild2, styles.dataChildLayout6]} />
      <View style={[styles.dataRekamMedisChild3, styles.dataChildLayout6]} />
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
      <View style={styles.dataRekamMedisChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dataRekamMedisItem, styles.dataPosition]} />
      <Text style={[styles.dashboardRekam, styles.dashboardTypo]}>
        DashBoard / Rekam Medis
      </Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.dataRekamMedisChild6, styles.dataChildLayout5]} />
      <Text style={[styles.tanggalPeriksa, styles.tanggalTypo]}>
        Tanggal Periksa : 11-01-2023
      </Text>
      <Text style={[styles.namaPasien, styles.namaTypo]}>
        Nama Pasien : Putra
      </Text>
      <Text style={[styles.keluhanBadan, styles.namaTypo]}>
        Keluhan : badan panas
      </Text>
      <Text style={[styles.diagnosaDemam, styles.namaTypo]}>
        Diagnosa : Demam
      </Text>
      <View style={[styles.dataRekamMedisChild7, styles.file21Layout]} />
      <Image
        style={[styles.user12, styles.user12Layout]}
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
        style={[styles.more1Icon, styles.user12Layout]}
        contentFit="cover"
        source={require("../assets/more-1.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.back, styles.backLayout]}>back</Text>
      <Text style={[styles.next, styles.backTypo]}>next</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("TambahRekamMedis")}
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
      <View style={[styles.dataRekamMedisChild1, styles.lineViewLayout]} />
      <Text style={styles.unduh}>unduh</Text>
      <Image
        style={[styles.file21, styles.file21Layout]}
        contentFit="cover"
        source={require("../assets/file-2-1.png")}
      />
      <View style={[styles.dataRekamMedisChild11, styles.dataChildLayout4]} />
      <View style={[styles.dataRekamMedisChild12, styles.dataChildLayout4]} />
      <Image
        style={[styles.trashCan5Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataRekamMedisChild11, styles.dataChildLayout4]} />
      <View style={[styles.dataRekamMedisChild12, styles.dataChildLayout4]} />
      <Image
        style={[styles.trashCan5Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <Text style={[styles.namaBudi1, styles.namaTypo1]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin1, styles.namaTypo1]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir1, styles.namaTypo1]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <View style={[styles.dataRekamMedisChild15, styles.dataChildLayout3]} />
      <View style={[styles.dataRekamMedisChild16, styles.dataChildLayout3]} />
      <Image
        style={[styles.trashCan7Icon, styles.trashCan7IconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataRekamMedisChild17, styles.dataChildLayout5]} />
      <Text style={[styles.tanggalPeriksa1, styles.tanggalTypo]}>
        Tanggal Periksa : 09-02-2023
      </Text>
      <Text style={[styles.namaPasien1, styles.namaTypo]}>
        Nama Pasien : Ucok
      </Text>
      <Text style={[styles.keluhanPanas, styles.namaTypo]}>
        Keluhan : Panas Dalam
      </Text>
      <Text style={[styles.diagnosaBatuk, styles.trashCan7IconPosition]}>
        Diagnosa : Batuk
      </Text>
      <View style={[styles.dataRekamMedisChild18, styles.dataChildLayout2]} />
      <View style={[styles.dataRekamMedisChild19, styles.dataChildLayout2]} />
      <Image
        style={[styles.trashCan8Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataRekamMedisChild18, styles.dataChildLayout2]} />
      <View style={[styles.dataRekamMedisChild19, styles.dataChildLayout2]} />
      <Image
        style={[styles.trashCan8Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <Text style={[styles.namaBudi2, styles.namaTypo1]}>Nama : Budi</Text>
      <Text style={[styles.jenisKelamin2, styles.namaTypo1]}>
        Jenis Kelamin : Laki-laki
      </Text>
      <Text style={[styles.tanggalLahir2, styles.namaTypo1]}>
        Tanggal lahir : 20-12-2001
      </Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={[styles.dataRekamMedisChild22, styles.dataChildLayout1]} />
      <View style={[styles.dataRekamMedisChild23, styles.dataChildLayout1]} />
      <Image
        style={[styles.trashCan10Icon, styles.trashCan10IconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataRekamMedisChild24, styles.dataChildLayout5]} />
      <Text style={styles.tanggalPeriksa2}>Tanggal Periksa : 12-11-2022</Text>
      <Text style={[styles.namaPasien2, styles.namaTypo]}>
        Nama Pasien : Wulan
      </Text>
      <Text style={[styles.keluhanRadang, styles.namaTypo]}>
        Keluhan : Radang Tenggorokan
      </Text>
      <Text style={[styles.diagnosaAmandel, styles.trashCan10IconPosition]}>
        Diagnosa : Amandel
      </Text>
      <View style={[styles.dataRekamMedisChild25, styles.dataChildLayout]} />
      <View style={[styles.dataRekamMedisChild26, styles.dataChildLayout]} />
      <Image
        style={[styles.trashCan11Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataRekamMedisChild25, styles.dataChildLayout]} />
      <View style={[styles.dataRekamMedisChild26, styles.dataChildLayout]} />
      <Image
        style={[styles.trashCan11Icon, styles.trashIconPosition]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <Image
        style={styles.hospital1Icon}
        contentFit="cover"
        source={require("../assets/hospital-1.png")}
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
  namaTypo1: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  textTypo: {
    left: 34,
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
  dataChildLayout6: {
    width: 34,
    backgroundColor: Color.colorGainsboro,
    top: 230,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashIconLayout: {
    height: 20,
    left: 309,
    width: 19,
  },
  iconLayout: {
    width: 20,
    left: 270,
    height: 20,
    position: "absolute",
  },
  dataChildLayout5: {
    height: 140,
    width: 277,
    left: 62,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  tanggalTypo: {
    width: 267,
    left: 68,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  namaTypo: {
    left: 70,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  user12Layout: {
    height: 21,
    position: "absolute",
  },
  groupChildLayout: {
    width: 149,
    height: 28,
    position: "absolute",
  },
  dataChildLayout4: {
    top: 259,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashIconPosition: {
    left: 307,
    height: 20,
    width: 19,
    position: "absolute",
  },
  iconPosition: {
    left: 268,
    width: 20,
    height: 20,
    position: "absolute",
  },
  dataChildLayout3: {
    top: 404,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashCan7IconPosition: {
    top: 409,
    position: "absolute",
  },
  dataChildLayout2: {
    top: 433,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  dataChildLayout1: {
    top: 578,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashCan10IconPosition: {
    top: 583,
    position: "absolute",
  },
  dataChildLayout: {
    top: 607,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  dataRekamMedisChild: {
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
  dataRekamMedisItem: {
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
    width: 29,
    height: 25,
    left: 17,
    top: 65,
    position: "absolute",
  },
  dataRekamMedisInner: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
    width: 343,
    left: 9,
  },
  rekamMedis1: {
    left: 45,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 112,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  namaBudi: {
    top: 174,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  jenisKelamin: {
    top: 205,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  tanggalLahir: {
    top: 236,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text: {
    top: 194,
  },
  rectangleView: {
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
  dataRekamMedisChild1: {
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
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  file21: {
    top: 111,
    left: 254,
    width: 21,
  },
  dataRekamMedisChild2: {
    left: 301,
  },
  dataRekamMedisChild3: {
    left: 263,
  },
  trashCan1Icon: {
    top: 235,
    position: "absolute",
  },
  edit1Icon: {
    top: 234,
  },
  dashboardRekam: {
    top: 69,
    width: 253,
  },
  dataRekamMedisChild6: {
    top: 155,
  },
  tanggalPeriksa: {
    top: 161,
  },
  namaPasien: {
    top: 185,
    width: 229,
    position: "absolute",
  },
  keluhanBadan: {
    top: 211,
    width: 229,
    position: "absolute",
  },
  diagnosaDemam: {
    top: 235,
    position: "absolute",
    width: 229,
  },
  dataRekamMedisChild7: {
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
    left: 178,
    width: 22,
    top: 723,
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
    height: 24,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 723,
    left: 17,
  },
  dataRekamMedisChild11: {
    left: 299,
  },
  dataRekamMedisChild12: {
    left: 261,
  },
  trashCan5Icon: {
    top: 264,
  },
  edit5Icon: {
    top: 263,
  },
  namaBudi1: {
    top: 348,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  jenisKelamin1: {
    top: 379,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  tanggalLahir1: {
    top: 410,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text1: {
    top: 368,
  },
  dataRekamMedisChild15: {
    left: 301,
  },
  dataRekamMedisChild16: {
    left: 263,
  },
  trashCan7Icon: {
    height: 20,
    left: 309,
    width: 19,
  },
  edit7Icon: {
    top: 408,
  },
  dataRekamMedisChild17: {
    top: 329,
  },
  tanggalPeriksa1: {
    top: 335,
  },
  namaPasien1: {
    top: 359,
    width: 229,
    position: "absolute",
  },
  keluhanPanas: {
    top: 385,
    width: 229,
    position: "absolute",
  },
  diagnosaBatuk: {
    left: 70,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    width: 229,
  },
  dataRekamMedisChild18: {
    left: 299,
  },
  dataRekamMedisChild19: {
    left: 261,
  },
  trashCan8Icon: {
    top: 438,
  },
  edit8Icon: {
    top: 437,
  },
  namaBudi2: {
    top: 522,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  jenisKelamin2: {
    top: 553,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  tanggalLahir2: {
    top: 584,
    width: 229,
    color: Color.colorDimgray,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text2: {
    top: 542,
  },
  dataRekamMedisChild22: {
    left: 301,
  },
  dataRekamMedisChild23: {
    left: 263,
  },
  trashCan10Icon: {
    height: 20,
    left: 309,
    width: 19,
  },
  edit10Icon: {
    top: 582,
  },
  dataRekamMedisChild24: {
    top: 503,
  },
  tanggalPeriksa2: {
    top: 509,
    width: 262,
    left: 68,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  namaPasien2: {
    top: 533,
    width: 229,
    position: "absolute",
  },
  keluhanRadang: {
    top: 559,
    width: 269,
    position: "absolute",
  },
  diagnosaAmandel: {
    left: 70,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    width: 229,
  },
  dataRekamMedisChild25: {
    left: 299,
  },
  dataRekamMedisChild26: {
    left: 261,
  },
  trashCan11Icon: {
    top: 612,
  },
  edit11Icon: {
    top: 611,
  },
  hospital1Icon: {
    left: 19,
    width: 19,
    height: 19,
    top: 112,
    position: "absolute",
  },
  dataRekamMedis: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DataRekamMedis;
