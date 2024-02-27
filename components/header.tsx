import type { FC } from "react";

import { View, StyleSheet, Image, SafeAreaView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors, Config } from "@/constants";

import LogoUri from "@/assets/images/icon.png";

const Logo: string = Image.resolveAssetSource(LogoUri).uri;

const Header: FC = (): JSX.Element => {
	return (
		<SafeAreaView>
			<View style={styles.main}>
				<Image source={{ uri: Logo }} width={35} height={35} />
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
		// backgroundColor: Colors.background,
		paddingTop: Platform.OS === "android" ? 30 : 20,
		borderBottomColor: "grey",
		// borderBottomWidth: 1,
		// position: "relative"
	},

	main_side: {
		flexDirection: "row",
		gap: 20,
	},
});

export default Header;
