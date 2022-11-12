import React from "react";
import { View, Text } from "react-native";
import Search from "../components/SearchBar";

export default function Chat() {

	return (
		<View style={{ flex: 1 }}>
			<Search/>
			<Text> CHAT PAGE </Text>
		</View>
	);
};