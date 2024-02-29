import type { FC } from "react";

import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors, Config } from "@/constants";

const CCard: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<Text style={styles.owner}>Yondy</Text>
			<View style={styles.details}>
				<View style={styles.detailstwo}>
					<Text style={[styles.detailsText, { marginRight: 10 }]}>17 Items</Text>
					<Text style={styles.detailsText}>Upload on Feb 24, 2024</Text>
				</View>
				<Feather name={"more-horizontal"} size={25} color={Colors.tertiary} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		backgroundColor: Colors.secondary,
		marginBottom: 10,
		borderRadius: 4,
		padding: Config.paddingOffSet,
	},
	owner: {
		color: Colors.primaryText,
		fontSize: 17,
		marginBottom: 15,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	detailstwo: {
		flexDirection: "row",
	},
	detailsText: {
		color: Colors.tertiary,
	},
});

export default CCard;
