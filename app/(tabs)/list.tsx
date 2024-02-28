import type { FC } from "react";

import { View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constants";

const List: FC = (): JSX.Element => {
	return <View style={styles.main}></View>;
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
	},
});

export default List;
