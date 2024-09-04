import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Images from "../../assets/images";

const HeaderLeftSide = () => {
  return (
    <Text
      style={{
        fontSize: 30,
        fontFamily: "StyleScript-Regular",
        textAlignVertical: "center",
        paddingTop: 10,
      }}
    >
      Instagram
    </Text>
  );
};

const HeaderRightSide = () => {
  return ( // Add return here
    <View style={{ flexDirection: "row", gap: 18, alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.2}>
        <FontAwesome6 name="square-plus" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.2}>
        <FontAwesome6 name="heart" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.2}>
        <Image
          source={Images.facebookMessager}
          style={{ width: 24, height: 24, marginLeft: -2.5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "white",
      }}
    >
      <HeaderLeftSide />
      <HeaderRightSide />
    </View>
  );
}

export default Header;
