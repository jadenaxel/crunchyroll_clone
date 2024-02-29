import type { FC } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Colors, Config } from "@/constants";
import { CCard } from "@/components";

const Crunchylist: FC = (): JSX.Element => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} style={styles.main}>
			<View style={styles.header}>
				<Text style={[styles.list, styles.textHeader]}>2/10 Lists</Text>
				<Text style={[styles.nlist, styles.textHeader]}>CREATE NEW LIST</Text>
			</View>
			{new Array(5).fill(3).map((item: number, i: number) => {
				return <CCard key={i} />;
			})}
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: Config.paddingOffSet,
	},
	text: {
		color: Colors.primaryText,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	textHeader: {
		fontSize: 17,
	},
	list: {
		color: Colors.tertiary,
	},
	nlist: {
		color: Colors.primary,
		fontWeight: "bold",
	},
});

export default Crunchylist;
