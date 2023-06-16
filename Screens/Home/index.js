import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MainMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productNintendo}>
      <Pressable
        style={styles.iconlytwoTonearrowLeft2}
        onPress={() => navigation.navigate("QuickOrderNintendi")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/iconlytwotonearrow--left-2.png")}
        />
      </Pressable>
      <Text style={styles.nintenoSwtich}>{`Ninteno Swtich `}</Text>
      <View style={styles.dollarCurrencySymbol1} />
      <Text style={[styles.qty, styles.qtyTypo]}>Qty</Text>
      <Text style={[styles.price, styles.qtyTypo]}>Price</Text>
      <Text style={styles.text}>1</Text>
      <Text style={styles.rp80000}>Rp80.000</Text>
      <View style={[styles.productNintendoChild, styles.productLayout]} />
      <View style={[styles.productNintendoItem, styles.productLayout]} />
      <Image
        style={[styles.fiBrPlusIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/fibrplus.png")}
      />
      <Image
        style={[styles.fiBrMinusIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/fibrminus.png")}
      />
      <View style={styles.productNintendoInner} />
      <Pressable
        style={styles.addToCartContainer}
        onPress={() => navigation.navigate("Pembelian3")}
      >
        <Text style={styles.addToCart}>Add to Cart</Text>
      </Pressable>
      <Pressable
        style={styles.download34}
        onPress={() => navigation.navigate("QuickOrderNintendi")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/download-3-4.png")}
        />
      </Pressable>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={styles.text1}>9:30</Text>
      <Image
        style={styles.topbarElementIcon}
        resizeMode="cover"
        source={require("../assets/topbar-element.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qtyTypo: {
    color: Color.steelblue,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    top: 516,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  productLayout: {
    height: 27,
    borderWidth: 0.5,
    borderColor: "#2287b9",
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    width: 26,
    top: 545,
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
    top: 552,
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    height: 34,
    width: 375,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlytwoTonearrowLeft2: {
    left: 18,
    top: 45,
    width: 35,
    height: 35,
    position: "absolute",
  },
  nintenoSwtich: {
    top: 423,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
    color: Color.black,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    left: 27,
    position: "absolute",
  },
  dollarCurrencySymbol1: {
    top: 549,
    left: 231,
    width: 19,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  qty: {
    left: 27,
  },
  price: {
    left: 234,
  },
  text: {
    left: 79,
    width: 7,
    height: 26,
    top: 545,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rp80000: {
    top: 543,
    left: 230,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  productNintendoChild: {
    left: 27,
  },
  productNintendoItem: {
    left: 112,
  },
  fiBrPlusIcon: {
    left: 118,
  },
  fiBrMinusIcon: {
    left: 33,
  },
  productNintendoInner: {
    top: 726,
    backgroundColor: Color.steelblue,
    width: 319,
    height: 61,
    left: 27,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  addToCart: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    width: 128,
    height: 31,
    textAlign: "left",
  },
  addToCartContainer: {
    left: 123,
    top: 742,
    position: "absolute",
  },
  download34: {
    left: 46,
    top: 179,
    width: 284,
    height: 144,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    height: 34,
    width: 375,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
  },
  text1: {
    top: 15,
    left: 29,
    fontSize: FontSize.size_xs,
    width: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 19,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  topbarElementIcon: {
    marginTop: -386.92,
    top: "50%",
    right: 18,
    width: 60,
    height: 10,
    position: "absolute",
  },
  productNintendo: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
});

export default MainMenu;
