import type { FC } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors, Config } from "@/constants";

const CardImage: string = "https://images3.alphacoders.com/134/1342304.jpeg";

const WCard: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<View style={styles.cardContainer}>
				<Image source={{ uri: CardImage }} style={styles.card} resizeMode="cover" />
				<View style={styles.cardText}>
					<Text style={styles.ctitle}>One Piece</Text>
					<Text style={styles.cepisode}>Continue: S14 E1095</Text>
					<Text style={{ color: Colors.tertiary }}>Subtitled</Text>
				</View>
			</View>
			<View style={styles.cicons}>
				<Feather name="heart" size={25} color={Colors.primaryText} />
				<Feather name="more-horizontal" size={25} color={Colors.primaryText} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		marginBottom: 10,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	card: {
		width: Config.DWidth / 5,
		height: 120,
		borderRadius: 4,
		marginRight: 10,
	},
	cardText: {},
	ctitle: {
		color: Colors.primaryText,
		fontSize: 17,
		marginBottom: 10,
	},
	cepisode: {
		color: Colors.tertiary,
		marginBottom: 20,
	},
	cicons: {
		flexDirection: "row",
		gap: 20,
		alignItems: "flex-end",
	},
});

export default WCard;
