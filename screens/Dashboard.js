import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={styles.dashboardChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dashboardItem, styles.dashboardPosition]} />
      <Text style={styles.dashboard1}>DashBoard</Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.dashboardInner, styles.dashboardPosition]} />
      <Text style={[styles.masterData, styles.home12Layout]}>MASTER DATA</Text>
      <Text style={[styles.laporan, styles.dataPosition]}>LAPORAN</Text>
      <Pressable
        style={[styles.dataDokterParent, styles.parentLayout]}
        onPress={() => navigation.navigate("DataDoktor")}
      >
        <Text style={[styles.dataDokter, styles.dataTypo]}>Data Dokter</Text>
        <Image
          style={[styles.doctor1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/doctor-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.dataPasienParent, styles.dataPosition]}
        onPress={() => navigation.navigate("DataPasien")}
      >
        <Text style={[styles.dataPasien, styles.dataTypo]}>Data Pasien</Text>
        <Image
          style={[styles.appointment1Icon, styles.user12Layout]}
          contentFit="cover"
          source={require("../assets/appointment-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rekamMedisParent, styles.parentLayout]}
        onPress={() => navigation.navigate("DataRekamMedis")}
      >
        <Text style={[styles.rekamMedis1, styles.rekamMedis1Position]}>
          Rekam Medis
        </Text>
        <Image
          style={[styles.hospital1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/hospital-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.home12Layout]} />
      <Image
        style={[styles.user12, styles.user12Layout]}
        contentFit="cover"
        source={require("../assets/user-1-2.png")}
      />
      <Image
        style={[styles.home12, styles.home12Layout]}
        contentFit="cover"
        source={require("../assets/home-1-2.png")}
      />
      <Image
        style={styles.more1Icon}
        contentFit="cover"
        source={require("../assets/more-1.png")}
      />
      <View style={styles.dashboardChild1} />
      <View style={[styles.dashboardChild2, styles.dashboardChildLayout]} />
      <View style={[styles.dashboardChild3, styles.dashboardChildLayout]} />
      <View style={[styles.dashboardChild4, styles.dashboardChildLayout]} />
      <Image
        style={styles.doctor2Icon}
        contentFit="cover"
        source={require("../assets/doctor-2.png")}
      />
      <Image
        style={[styles.appointment2Icon, styles.rekamMedis1Position]}
        contentFit="cover"
        source={require("../assets/appointment-2.png")}
      />
      <Image
        style={[styles.hospital2Icon, styles.dataPosition]}
        contentFit="cover"
        source={require("../assets/hospital-2.png")}
      />
      <Text style={[styles.totalDokter, styles.totalTypo]}>Total Dokter</Text>
      <Text style={[styles.totalPasien, styles.totalTypo]}>Total Pasien</Text>
      <Text style={[styles.totalRekamMedis, styles.totalTypo]}>
        Total Rekam medis
      </Text>
      <Text style={[styles.text, styles.textTypo]}>3</Text>
      <Text style={[styles.text1, styles.textTypo]}>3</Text>
      <Text style={[styles.text2, styles.textTypo]}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardPosition: {
    width: 343,
    left: 9,
    position: "absolute",
  },
  home12Layout: {
    height: 22,
    position: "absolute",
  },
  dataPosition: {
    left: 29,
    position: "absolute",
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  dataTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 0,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  iconPosition: {
    height: 19,
    left: 0,
    position: "absolute",
  },
  user12Layout: {
    height: 21,
    position: "absolute",
  },
  rekamMedis1Position: {
    left: 28,
    position: "absolute",
  },
  dashboardChildLayout: {
    height: 54,
    width: 317,
    left: 21,
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  totalTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    position: "absolute",
  },
  textTypo: {
    width: 27,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    left: 163,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 16,
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  dashboardChild: {
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
    color: Color.colorWhite,
    width: 170,
    height: 26,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  dashboardItem: {
    top: 61,
    borderRadius: Border.br_8xs,
    height: 33,
    backgroundColor: Color.colorDarkturquoise,
    width: 343,
    left: 9,
  },
  dashboard1: {
    left: 46,
    fontFamily: FontFamily.interRegular,
    width: 119,
    height: 16,
    color: Color.colorDarkgray_200,
    top: 65,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  speedometer1Icon: {
    width: 29,
    height: 25,
    left: 17,
    top: 65,
    position: "absolute",
  },
  dashboardInner: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
    width: 343,
    left: 9,
  },
  masterData: {
    top: 112,
    left: 14,
    width: 156,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  laporan: {
    top: 220,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  dataDokter: {
    left: 29,
    position: "absolute",
  },
  doctor1Icon: {
    top: 1,
    width: 20,
  },
  dataDokterParent: {
    top: 143,
    width: 130,
    left: 30,
  },
  dataPasien: {
    left: 30,
    position: "absolute",
  },
  appointment1Icon: {
    top: 2,
    width: 21,
    height: 21,
    left: 0,
  },
  dataPasienParent: {
    top: 179,
    width: 131,
    height: 23,
  },
  rekamMedis1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 0,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
  },
  hospital1Icon: {
    width: 19,
    top: 0,
    height: 19,
    left: 0,
  },
  rekamMedisParent: {
    top: 255,
    left: 31,
    width: 141,
  },
  rectangleView: {
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
  home12: {
    top: 582,
    width: 22,
    left: 17,
  },
  more1Icon: {
    top: 761,
    left: 163,
    height: 21,
    width: 21,
    position: "absolute",
  },
  dashboardChild1: {
    top: 294,
    left: 15,
    width: 329,
    height: 258,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorDarkturquoise,
    position: "absolute",
  },
  dashboardChild2: {
    top: 316,
  },
  dashboardChild3: {
    top: 400,
  },
  dashboardChild4: {
    top: 484,
  },
  doctor2Icon: {
    top: 327,
    left: 25,
    width: 30,
    height: 30,
    position: "absolute",
  },
  appointment2Icon: {
    top: 406,
    width: 31,
    height: 35,
  },
  hospital2Icon: {
    top: 498,
    width: 28,
    height: 28,
  },
  totalDokter: {
    top: 332,
    textAlign: "left",
    left: 145,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  totalPasien: {
    top: 411,
    left: 145,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  totalRekamMedis: {
    top: 491,
    left: 126,
    textAlign: "center",
  },
  text: {
    top: 352,
  },
  text1: {
    top: 431,
  },
  text2: {
    top: 510,
  },
  dashboard: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Dashboard;
