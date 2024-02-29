import type { FC } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

import GCard from "@/components/GCard";
import { Colors, Config } from "@/constants";

const data: any = [
	{ id: 1, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 2, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 3, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 4, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 5, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 6, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 7, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 8, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 9, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 10, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 11, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 12, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 13, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 14, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 15, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 16, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 17, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 18, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
	{ id: 19, uri: "https://images3.alphacoders.com/134/1342304.jpeg" },
];

const Genres: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<FlatList data={data} renderItem={(item: any) => <GCard {...item} />} keyExtractor={(item: any) => item.id} numColumns={2} />
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: Config.paddingOffSet,
	},
});

export default Genres;
