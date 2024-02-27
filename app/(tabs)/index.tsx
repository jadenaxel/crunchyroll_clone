import type { FC } from "react";

import { ScrollView, StyleSheet, View, Text, ImageBackground, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, Config } from "@/constants";
import { Card } from "@/components";

const coverUrl: string = "https://images4.alphacoders.com/131/1317168.jpeg";

const Home: FC = (): JSX.Element => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
			<StatusBar backgroundColor="black" style="light" />
			{/* Cover */}
			<View style={styles.cover_container}>
				<ImageBackground source={{ uri: coverUrl }} resizeMode={"cover"} style={styles.cover__background}>
					<View style={styles.cover__content}>
						<Text style={styles.cover__content_title}>Demon Slayer: Kimetsu no Yaiba</Text>
						<View style={styles.cover__content_categorie}>
							<Text style={[styles.cover__content_categories, { marginRight: 10 }]}>Dub | Sub</Text>
							<Text style={styles.cover__content_categories}>Action, Fantasy, Shonen</Text>
						</View>
						<Text style={styles.cover__content_description} ellipsizeMode="tail" numberOfLines={3}>
							It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his
							younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a "demon
							slayer" so that he can turn his sister back into a human, and kill the demon that massacred his family.
						</Text>
						<View style={styles.cover__content_button}>
							<Pressable style={styles.cover__content_continue}>
								<Feather name="play" color={Colors.secondary} size={25} style={{ marginRight: 10 }} />
								<Text style={styles.cover__content_continue_text}>CONTINUE WATCHING S2 E11</Text>
							</Pressable>
							<Pressable style={styles.cover__content_bookmark}>
								<Feather name="bookmark" size={25} color={Colors.primary} />
							</Pressable>
						</View>
					</View>
					<LinearGradient colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]} style={styles.featured__gradient} />
				</ImageBackground>
			</View>
			{/* Top To Pick */}
			<View style={styles.toptopick}>
				<Text style={styles.toptopick_title}>Top Picks for You</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.toptopick_card}>
					{[0, 1, 2].map((item: number) => {
						return <Card key={item} />;
					})}
				</ScrollView>
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.background,
	},
	cover_container: {
		marginBottom: 20,
	},
	cover__background: {
		height: 600,
		justifyContent: "flex-end",
	},
	cover__content: {
		paddingHorizontal: 15,
		position: "relative",
		zIndex: 1,
	},
	cover__content_title: {
		color: Colors.primaryText,
		fontSize: 25,
		fontWeight: "400",
		marginBottom: 10,
	},
	cover__content_categorie: {
		flexDirection: "row",
		marginBottom: 10,
	},
	cover__content_categories: {
		color: Colors.tertiary,
	},
	cover__content_description: {
		color: Colors.primaryText,
		marginBottom: 20,
	},
	cover__content_button: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
	},
	cover__content_continue: {
		backgroundColor: Colors.primary,
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		flex: 1,
	},
	cover__content_continue_text: {
		color: Colors.secondary,
		fontSize: 17,
		fontWeight: "400",
	},
	cover__content_bookmark: {
		borderColor: Colors.primary,
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	featured__gradient: {
		aspectRatio: 1,
		bottom: 0,
		flex: 1,
		left: 0,
		position: "absolute",
		right: 0,
	},
	toptopick: {
		paddingHorizontal: Config.paddingOffSet,
	},
	toptopick_title: {
		color: Colors.primaryText,
		fontSize: 17,
		marginBottom: 10,
	},
	toptopick_card: {
		flexDirection: "row",
	},
});
