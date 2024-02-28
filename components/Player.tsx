import type { FC } from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors, Config } from "@/constants";

const PlayerImage: string = "https://images5.alphacoders.com/134/1346849.png";

const Player: FC = (): JSX.Element => {
	return (
		<ImageBackground style={styles.main} source={{ uri: PlayerImage }} borderRadius={4}>
			<Feather name="play-circle" color={Colors.primaryText} size={30} style={{ marginRight: 10 }} />
			<View style={styles.content}>
				<View>
					<Text style={[styles.text, styles.title]}>One Piece</Text>
					<Text style={styles.text}>Season 14, Episode 1095</Text>
				</View>
				<View style={styles.remaining}>
					<Text style={styles.text}>2m left</Text>
				</View>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	main: {
		width: Config.DWidth - 60,
		height: 200,
		marginRight: 20,

		flexDirection: "row",
		alignItems: "flex-end",

		padding: Config.paddingOffSet,
	},
	content: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
	},
	text: {
		color: Colors.primaryText,
	},
	title: {
		fontSize: 18,
	},
	remaining: {
		backgroundColor: Colors.secondary,
		padding: 5,
		borderRadius: 4,
	},
});

export default Player;
