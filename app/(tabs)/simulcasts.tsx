import type { FC } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Colors, Config } from "@/constants";
import { Card } from "@/components";

const data: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

const SimulCasts: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<View style={styles.w_title}>
				<Text style={[styles.text, styles.w_title_h1]}>Popular</Text>
				<View style={styles.w_settings}>
					<Feather name="align-left" size={25} color={Colors.primaryText} />
					<Feather name="more-horizontal" size={25} color={Colors.primaryText} />
				</View>
			</View>
			<FlatList data={data} renderItem={() => <Card full />} keyExtractor={(item: any) => item.id} numColumns={2} columnWrapperStyle={{ marginBottom: 20 }} />
		</View>
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
	w_title: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	w_title_h1: {
		fontSize: 17,
	},
	w_settings: {
		flexDirection: "row",
		gap: 20,
	},
});

export default SimulCasts;
