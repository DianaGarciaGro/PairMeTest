import * as React from "react";
import { Avatar } from "@rneui/base";

export default function Imagen () {
  return (
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size={100}
      source={{ uri: "https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-young-girl-vector-illustration-face_217290-363.jpg?w=2000" }}
      title="DG"
      titleStyle={{}}
    />
  );
}