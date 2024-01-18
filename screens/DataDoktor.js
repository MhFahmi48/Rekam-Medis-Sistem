import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DataDoktor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dataDoktor}>
      <View style={styles.dataDoktorChild} />
      <Text style={styles.rekamMedis}>Rekam Medis</Text>
      <View style={[styles.dataDoktorItem, styles.dataPosition]} />
      <Text style={styles.dashboardDokter}>DashBoard / Dokter</Text>
      <Image
        style={styles.speedometer1Icon}
        contentFit="cover"
        source={require("../assets/speedometer-1.png")}
      />
      <View style={[styles.dataDoktorInner, styles.dataPosition]} />
      <Text style={styles.dataDokter}>Data Dokter</Text>
      <Image
        style={styles.doctor1Icon}
        contentFit="cover"
        source={require("../assets/doctor-1.png")}
      />
      <View style={[styles.rectangleView, styles.dataChildLayout2]} />
      <Text style={[styles.namaJamal, styles.telpLayout]}>
        Nama : Jamal ,Sp,M.
      </Text>
      <Text style={[styles.spesialisUmum, styles.telpLayout]}>
        Spesialis : Umum
      </Text>
      <Text style={[styles.emailJamalgmailcom, styles.textTypo1]}>
        Email : Jamal@gmail.com
      </Text>
      <Text style={[styles.noTelp, styles.telpLayout]}>
        No Telp : 0895234412
      </Text>
      <Text style={[styles.alamatJllurus, styles.telpLayout]}>
        Alamat : Jl.Lurus
      </Text>
      <View style={[styles.dataDoktorChild1, styles.dataChildLayout2]} />
      <Text style={[styles.namaDrrosa, styles.telpLayout]}>Nama : Dr.Rosa</Text>
      <Text style={[styles.spesialisKecantikan, styles.telpLayout]}>
        Spesialis : Kecantikan
      </Text>
      <Text style={[styles.emailRosalenagmailcom, styles.telpTypo]}>
        Email : Rosalena@gmail.com
      </Text>
      <Text style={[styles.noTelp1, styles.telpLayout]}>
        No Telp : 08136361271
      </Text>
      <Text style={[styles.alamatJlbuntu, styles.telpLayout]}>
        Alamat : Jl.Buntu
      </Text>
      <View style={[styles.dataDoktorChild2, styles.dataChildLayout2]} />
      <Text style={[styles.namaDrsamsudin, styles.telpLayout]}>
        Nama : Dr.Samsudin
      </Text>
      <Text style={[styles.spesialisKesehatan, styles.telpLayout]}>
        Spesialis : Kesehatan
      </Text>
      <Text style={[styles.emailSamsudingmailcom, styles.telpTypo]}>
        Email : Samsudin@gmail.com
      </Text>
      <Text style={[styles.noTelp2, styles.telpLayout]}>
        No Telp : 08123445123
      </Text>
      <Text
        style={[styles.alamatJlikan, styles.telpLayout]}
      >{`Alamat : Jl.Ikan `}</Text>
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={styles.dataDoktorChild3} />
      <Text style={[styles.back, styles.backLayout]}>back</Text>
      <Text style={[styles.next, styles.backTypo]}>next</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("TambahDoktor")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.tambahData, styles.backLayout]}>
          + Tambah data
        </Text>
      </Pressable>
      <View style={[styles.dataDoktorChild4, styles.lineViewLayout]} />
      <Text style={[styles.unduh, styles.telpTypo]}>unduh</Text>
      <Image
        style={[styles.file21, styles.file21Layout]}
        contentFit="cover"
        source={require("../assets/file-2-1.png")}
      />
      <View style={[styles.dataDoktorChild5, styles.dataChildLayout1]} />
      <View style={[styles.dataDoktorChild6, styles.dataChildLayout1]} />
      <Image
        style={[styles.trashCan1Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataDoktorChild7, styles.dataChildLayout]} />
      <View style={[styles.dataDoktorChild8, styles.dataChildLayout]} />
      <Image
        style={[styles.trashCan2Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataDoktorChild9, styles.dataChildLayout1]} />
      <View style={[styles.dataDoktorChild10, styles.dataChildLayout1]} />
      <Image
        style={[styles.trashCan3Icon, styles.trashIconLayout]}
        contentFit="cover"
        source={require("../assets/trashcan-1.png")}
      />
      <Image
        style={[styles.edit3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={[styles.dataDoktorChild11, styles.file21Layout]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  dataPosition: {
    width: 343,
    left: 9,
    position: "absolute",
  },
  dataChildLayout2: {
    height: 171,
    width: 277,
    left: 62,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  telpLayout: {
    width: 229,
    left: 76,
  },
  textTypo1: {
    top: 216,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  telpTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  textTypo: {
    left: 28,
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
  groupChildLayout: {
    width: 149,
    height: 28,
    position: "absolute",
  },
  file21Layout: {
    height: 22,
    position: "absolute",
  },
  dataChildLayout1: {
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  trashIconLayout: {
    height: 20,
    width: 19,
    left: 307,
    position: "absolute",
  },
  iconPosition: {
    left: 268,
    height: 20,
    width: 20,
    position: "absolute",
  },
  dataChildLayout: {
    top: 475,
    width: 34,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  user12Layout: {
    height: 21,
    position: "absolute",
  },
  dataDoktorChild: {
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
  dataDoktorItem: {
    top: 61,
    backgroundColor: Color.colorDarkturquoise,
    height: 33,
    borderRadius: Border.br_8xs,
    width: 343,
  },
  dashboardDokter: {
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
  dataDoktorInner: {
    top: 100,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 691,
  },
  dataDokter: {
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
  doctor1Icon: {
    top: 113,
    left: 22,
    height: 19,
    width: 20,
    position: "absolute",
  },
  rectangleView: {
    top: 141,
  },
  namaJamal: {
    top: 154,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  spesialisUmum: {
    top: 185,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  emailJamalgmailcom: {
    width: 229,
    left: 76,
  },
  noTelp: {
    top: 247,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  alamatJllurus: {
    top: 278,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  dataDoktorChild1: {
    top: 339,
  },
  namaDrrosa: {
    top: 350,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  spesialisKecantikan: {
    top: 381,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  emailRosalenagmailcom: {
    top: 412,
    width: 240,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 76,
  },
  noTelp1: {
    top: 443,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  alamatJlbuntu: {
    top: 474,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  dataDoktorChild2: {
    top: 536,
  },
  namaDrsamsudin: {
    top: 547,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  spesialisKesehatan: {
    top: 578,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  emailSamsudingmailcom: {
    width: 250,
    top: 609,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 76,
  },
  noTelp2: {
    top: 640,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  alamatJlikan: {
    top: 671,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    position: "absolute",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text: {
    left: 32,
  },
  text1: {
    top: 415,
  },
  text2: {
    top: 609,
  },
  dataDoktorChild3: {
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
    top: 723,
    height: 29,
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
    top: 721,
    width: 149,
    left: 9,
  },
  dataDoktorChild4: {
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
  },
  file21: {
    top: 111,
    left: 254,
    width: 21,
  },
  dataDoktorChild5: {
    left: 299,
    top: 281,
    width: 34,
    backgroundColor: Color.colorGainsboro,
  },
  dataDoktorChild6: {
    left: 261,
    top: 281,
    width: 34,
    backgroundColor: Color.colorGainsboro,
  },
  trashCan1Icon: {
    top: 286,
  },
  edit1Icon: {
    top: 285,
  },
  dataDoktorChild7: {
    left: 299,
  },
  dataDoktorChild8: {
    left: 261,
  },
  trashCan2Icon: {
    top: 480,
  },
  edit2Icon: {
    top: 479,
  },
  dataDoktorChild9: {
    left: 299,
    top: 671,
  },
  dataDoktorChild10: {
    left: 261,
    top: 671,
  },
  trashCan3Icon: {
    top: 676,
  },
  edit3Icon: {
    top: 675,
  },
  dataDoktorChild11: {
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
    top: 724,
    width: 22,
  },
  more1Icon: {
    top: 765,
    left: 171,
    width: 21,
  },
  dataDoktor: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DataDoktor;
