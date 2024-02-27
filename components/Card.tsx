import type { FC } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const CardImage: string = "https://images3.alphacoders.com/134/1342304.jpeg";

const Card: FC = (): JSX.Element => {
	return (
		<View style={styles.main}>
			<Image source={{ uri: CardImage }} style={styles.cardImage} resizeMode="cover" />
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
        marginRight: 20
    },
	cardImage: {
		height: 250,
        width: 150
	},
});

export default Card;
