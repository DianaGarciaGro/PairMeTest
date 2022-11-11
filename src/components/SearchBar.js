import * as React from "react";
import { SearchBar } from "@rneui/base";

export default function Search () {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="android"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      lightTheme
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Search name..."
      placeholderTextColor="#888"
      round
      showCancel
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
}