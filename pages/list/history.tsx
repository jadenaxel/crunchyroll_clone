import type { FC } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

import { Colors, Config } from "@/constants";

import { Feather } from "@expo/vector-icons";
import Watched from "./watched";

const data: any = [
	{
		id: 1,
		uri: "https://images3.alphacoders.com/134/1342304.jpeg",
	},
	{
		id: 2,
		uri: "https://images3.alphacoders.com/134/1342304.jpeg",
	},
	{
		id: 3,
		uri: "https://images3.alphacoders.com/134/1342304.jpeg",
	},
	{
		id: 4,
		uri: "https://images3.alphacoders.com/134/1342304.jpeg",
	},
];

const History: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<View style={styles.header}>
				<Feather name={"align-left"} color={Colors.primaryText} size={25} />
				<Text style={[styles.text, styles.headerM]}>MANAGE</Text>
			</View>
			<FlatList data={data} renderItem={(item: any) => <Watched {...item} />} keyExtractor={(item: any) => item.id} numColumns={2} />
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: Colors.background,
		flex: 1,
		padding: Config.paddingOffSet,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: Config.paddingOffSet,
		borderBottomColor: Colors.tertiary,
		borderBottomWidth: 0.3,
		marginBottom: 20,
	},
	text: {
		color: Colors.primaryText,
	},
	headerM: {
		fontSize: 17,
		fontWeight: "bold",
	},
});

export default History;
