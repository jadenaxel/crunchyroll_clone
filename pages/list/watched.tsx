import type { FC } from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { Colors, Config } from "@/constants";
import { Feather } from "@expo/vector-icons";

interface Props {
	item: any;
}

const Watched: FC<Props> = (props: Props): JSX.Element => {
	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: props.item.uri }} style={styles.anime} borderRadius={4} resizeMode="cover" blurRadius={3}>
				<Feather name={"play-circle"} size={35} color={Colors.primaryText} />
				<View style={styles.remaining}>
					<Text style={styles.remainingText}>23 Left</Text>
				</View>
			</ImageBackground>
			<View>
				<Text style={styles.animetitle}>One Piece</Text>
				<Text style={styles.episodetitle}>Luffy VS Kaido</Text>
				<View style={styles.extra}>
					<View style={styles.extraText}>
						<Text style={[styles.extraTextItem, { marginRight: 10 }]}>S2 E28</Text>
						<Text style={styles.extraTextItem}>Dubbed</Text>
					</View>
					<Feather name={"more-horizontal"} size={25} color={Colors.tertiary} />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		marginBottom: 15,
		width: Config.DWidth / 2.1,
		marginRight: Config.DWidth / 20,
	},
	anime: {
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		marginBottom: 10,
	},
	remaining: {
		position: "absolute",
		backgroundColor: Colors.secondary,
		padding: 5,
		borderRadius: 4,
		bottom: 2,
		right: 2,
	},
	remainingText: {
		color: Colors.primaryText,
	},
	animetitle: {
		color: Colors.tertiary,
	},
	episodetitle: {
		color: Colors.primaryText,
		fontSize: 17,
		marginBottom: 10,
		fontWeight: "bold",
	},
	extra: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	extraText: {
		flexDirection: "row",
	},
	extraTextItem: {
		color: Colors.tertiary,
	},
});

export default Watched;
