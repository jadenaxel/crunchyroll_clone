import type { FC } from "react";

import { View, Text, StyleSheet } from "react-native";

import { Card } from "@/components";
import { Colors, Config } from "@/constants";

const Oflfline: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<Card />
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: Config.paddingOffSet,
	},
});

export default Oflfline;
