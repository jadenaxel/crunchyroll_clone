import type { FC } from "react";

import { View, StyleSheet, Image, SafeAreaView, Platform, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import { Colors, Config } from "@/constants";

import LogoUri from "@/assets/images/icon.png";

const Logo: string = Image.resolveAssetSource(LogoUri).uri;

const Header: FC<any> = ({ title, bg }: any): JSX.Element => {
	return (
		<SafeAreaView>
			<View style={[styles.main, bg ? { backgroundColor: Colors.background } : null]}>
				<Image source={{ uri: Logo }} width={35} height={35} />
				{title !== null ? <Text style={styles.title}>{title}</Text> : null}
				<View style={styles.main_side}>
					<Feather name={"cast"} color={Colors.primaryText} size={25} />
					<Feather name={"search"} color={Colors.primaryText} size={25} />
				</View>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	main: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: Config.paddingOffSet,
		paddingTop: Platform.OS === "android" ? 30 : 20,
		borderBottomColor: "grey",
	},
	title: {
		fontSize: 20,
		color: Colors.primaryText,
		fontWeight: "bold",
	},

	main_side: {
		flexDirection: "row",
		gap: 20,
	},
});

export default Header;
