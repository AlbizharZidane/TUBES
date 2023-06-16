import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.search}
      onPress={() => navigation.navigate("HomeDefault")}
    >
      <Image
        style={styles.iconlyboldlocation}
        contentFit="cover"
        source={require("../assets/iconlyboldlocation.png")}
      />
      <Text style={styles.deliverTo}>DELIVER TO</Text>
      <Text style={[styles.home154, styles.home154Typo]}>
        Home - 15/4 Roawda...
      </Text>
      <View style={[styles.searchChild, styles.searchShadowBox]} />
      <Image
        style={styles.fiBrSearchIcon}
        contentFit="cover"
        source={require("../assets/fibrsearch.png")}
      />
      <Text style={styles.searchForDrink}>Search for drink</Text>
      <View style={styles.group4301} />
      <View style={styles.brewLogo1}>
        <Image
          style={styles.kisspngVideoGameGameControIcon}
          contentFit="cover"
          source={require("../assets/kisspngvideogamegamecontrollerjoystickonlinegamevectorgamepad5a7166f1d5b6b1-1.png")}
        />
      </View>
      <View style={[styles.searchItem, styles.searchShadowBox]} />
      <Text style={[styles.recentSearches, styles.home154Typo]}>
        Recent Searches
      </Text>
      <Text style={[styles.budwiserCan100ml, styles.calsbergBeerTypo]}>
        Budwiser Can 100ml
      </Text>
      <Text style={[styles.calsbergBeer, styles.calsbergBeerTypo]}>
        Calsberg Beer
      </Text>
      <Image
        style={[styles.fiBrSearchIcon1, styles.searchIconPosition]}
        contentFit="cover"
        source={require("../assets/fibrsearch1.png")}
      />
      <Image
        style={[styles.fiBrSearchIcon2, styles.searchIconPosition]}
        contentFit="cover"
        source={require("../assets/fibrsearch1.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={styles.text}>9:30</Text>
      <Image
        style={styles.topbarElementIcon}
        contentFit="cover"
        source={require("../assets/topbar-element.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  home154Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  searchShadowBox: {
    width: 317,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    left: 29,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  calsbergBeerTypo: {
    left: 68,
    color: Color.darkgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  searchIconPosition: {
    left: 46,
    height: 12,
    width: 12,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    height: 34,
    width: 375,
    left: "50%",
    top: 0,
    marginLeft: -187.5,
    position: "absolute",
  },
  iconlyboldlocation: {
    top: 46,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  deliverTo: {
    top: 45,
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.8,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    left: 51,
    position: "absolute",
  },
  home154: {
    top: 55,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 51,
  },
  searchChild: {
    top: 87,
    height: 38,
  },
  fiBrSearchIcon: {
    top: 100,
    left: 44,
    height: 12,
    width: 12,
    position: "absolute",
    overflow: "hidden",
  },
  searchForDrink: {
    top: 97,
    left: 67,
    color: Color.darkgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  group4301: {
    top: 152,
    left: -4,
    borderRadius: 14,
    backgroundColor: Color.steelblue,
    width: 384,
    height: 667,
    position: "absolute",
  },
  kisspngVideoGameGameControIcon: {
    height: "66.47%",
    width: "75.06%",
    top: "0%",
    right: "12.47%",
    bottom: "33.53%",
    left: "12.47%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  brewLogo1: {
    top: 270,
    left: -10,
    width: 385,
    height: 346,
    position: "absolute",
    overflow: "hidden",
  },
  searchItem: {
    top: 145,
    height: 126,
  },
  recentSearches: {
    top: 163,
    left: 45,
    fontSize: FontSize.size_base,
  },
  budwiserCan100ml: {
    top: 200,
  },
  calsbergBeer: {
    top: 225,
  },
  fiBrSearchIcon1: {
    top: 203,
  },
  fiBrSearchIcon2: {
    top: 228,
  },
  groupChild: {
    backgroundColor: Color.white,
  },
  text: {
    top: 15,
    width: 26,
    height: 19,
    left: 29,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
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
  search: {
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
});

export default Search;
