import { Colors, Config } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { FC } from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface Props {
	item: any;
}

const GCard: FC<Props> = (props: Props): JSX.Element => {
	return (
		<View style={styles.main}>
			<ImageBackground source={{ uri: props.item.uri }} borderRadius={4} style={styles.card}>
				<Feather name="heart" size={25} color={Colors.primaryText} style={{ zIndex: 1 }} />
				<Text style={styles.type}>SHOJO</Text>
				<LinearGradient colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, .8)"]} style={styles.linear} />
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		width: Config.DWidth / 2.2,
		marginRight: Config.DWidth / 25,
		marginBottom: 20,
	},
	card: {
		height: Config.DHeight / 10,
		alignItems: "center",
		justifyContent: "center",
	},
	type: {
		color: Colors.primaryText,
		fontSize: 17,
		fontWeight: "bold",
		zIndex: 1,
	},
	linear: {
		aspectRatio: 1,
		bottom: -5,
		flex: 1,
		left: 0,
		position: "absolute",
		right: 0,
		top: 1,
	},
});

export default GCard;
