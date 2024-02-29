import type { FC } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

import { Card } from "@/components";
import { Colors, Config } from "@/constants";

const data: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

const Oflfline: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<Text style={styles.header}>MANAGE</Text>
			<FlatList data={data} renderItem={() => <Card full />} keyExtractor={(item: any) => item.id} numColumns={2} />
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: Config.paddingOffSet,
	},
	header: {
		color: Colors.primaryText,
		fontWeight: "bold",
		fontSize: 17,
		marginBottom: 20,
		alignSelf: "flex-end",
	},
});

export default Oflfline;
