import type { FC } from "react";

import { Pressable, View, Text, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
import { Colors, Config } from "@/constants";

const CardImage: string = "https://images3.alphacoders.com/134/1342304.jpeg";

interface Props {
	full?: any;
}

const Card: FC<Props> = (props: Props): JSX.Element => {
	return (
		<Pressable
			onLongPress={() => log("Gola")}
			style={props?.full ? { marginRight: Config.DWidth / 25, width: Config.DWidth / 2.2, marginBottom: 20 } : { marginRight: 20, width: Config.DWidth / 2.5 }}
		>
			<Image source={{ uri: CardImage }} style={styles.cardImage} resizeMode="cover" />
			<Text style={styles.cardTitle}>One Piece</Text>
			<View style={styles.cardMore}>
				<Text style={styles.cardMore_text}>Dub | Sub</Text>
				<Feather name={"more-horizontal"} size={25} color={Colors.tertiary} />
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	main: {},
	cardImage: {
		height: Config.DHeight / 3,
		marginBottom: 10,
		borderRadius: 4,
	},
	cardTitle: {
		color: Colors.primaryText,
		marginBottom: 10,
		fontSize: 17,
	},
	cardMore: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardMore_text: {
		color: Colors.tertiary,
	},
});

export default Card;
