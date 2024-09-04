import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

//TODO: branch name suggestion: challenge-hari-ketiga
// TODO: buat agar text more-nya sejajar dengan caption, sebelum di klik more itu caption yang tampil maksimal 2 baris
// TODO: dan setelah di klik more nya, semua caption tampil
const FeedCaption = (props) => {
  const [showMore, setShowMore] = useState(false);

  const handlePress = () => {
    setShowMore(true);
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold" }} numberOfLines={showMore ? undefined : 2}>
        {props.item.username}{" "}
        <Text
          style={{ fontWeight: "300" }}
        >
          {props.item.feed.caption}
        </Text>
      </Text>
      {!showMore && (
        <Text onPress={handlePress} style={{ color: "black" }}>
        {showMore ? "less" : " more"}
      </Text>
      )}
    </View>
  );
};

export default FeedCaption;
