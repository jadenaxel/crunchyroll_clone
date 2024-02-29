import type { FC } from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { Colors, Config } from "@/constants";
import { Feather } from "@expo/vector-icons";

const Account: FC = (): JSX.Element => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} style={styles.main}>
			<View style={styles.account}>
				<Image source={{ uri: "https://images5.alphacoders.com/134/1346849.png" }} style={styles.profile} />
				<View>
					<Text style={styles.profileName}>Monkey D. Luffy</Text>
					<Text style={styles.profileMember}>Premiun Member</Text>
				</View>
			</View>
			<View>
				<View style={styles.option}>
					<Text style={styles.text}>Membership Plan</Text>
					<Feather name="chevron-right" size={25} color={Colors.primaryText} />
				</View>
				<View style={styles.option}>
					<Text style={styles.text}>Email</Text>
					<Feather name="chevron-right" size={25} color={Colors.primaryText} />
				</View>
				<View style={styles.option}>
					<Text style={styles.text}>Password</Text>
					<Feather name="chevron-right" size={25} color={Colors.primaryText} />
				</View>
				<View style={styles.option}>
					<Text style={styles.text}>Log Out</Text>
					<Feather name="chevron-right" size={25} color={Colors.primaryText} />
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.background,
		padding: Config.paddingOffSet,
	},
	account: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 50,
	},
	profile: {
		width: 90,
		height: 90,
		borderRadius: 50,
		marginRight: 20,
	},
	profileName: {
		color: Colors.primaryText,
		fontSize: 17,
		marginBottom: 5,
	},
	profileMember: {
		color: Colors.primary,
		fontWeight: "bold",
	},
	option: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomColor: Colors.tertiary,
		borderBottomWidth: 0.3,
		padding: 15,
	},
	text: {
		color: Colors.primaryText,
		fontSize: 17,
		fontWeight: "400",
	},
});

export default Account;
