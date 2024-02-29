import type { FC } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors, Config } from "@/constants";
import { WCard } from "@/components";

const WatchList: FC = (): JSX.Element => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.main}>
			<View style={styles.main2}>
				<View style={styles.w_title}>
					<Text style={[styles.text, styles.w_title_h1]}>Recent Activity</Text>
					<View style={styles.w_settings}>
						<Feather name="align-left" size={25} color={Colors.primaryText} />
						<Feather name="more-horizontal" size={25} color={Colors.primaryText} />
					</View>
				</View>
				{new Array(10).fill(2).map((item: number, i: number) => {
					return <WCard key={i} />;
				})}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	main: {
		backgroundColor: Colors.background,
	},
	main2: {
		flex: 1,
		padding: Config.paddingOffSet,
	},
	text: {
		color: Colors.primaryText,
	},
	w_title: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	w_title_h1: {
		fontSize: 17,
	},
	w_settings: {
		flexDirection: "row",
		gap: 20,
	},
});

export default WatchList;
