import type { FC } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Colors } from "@/constants";

import { AllAnime, AnimeGenres } from "@/pages/browse";

const Tab = createMaterialTopTabNavigator();

const Browse: FC = (): JSX.Element => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: Colors.background,
					borderBottomColor: Colors.tertiary,
					borderBottomWidth: 0.3,
				},
				tabBarLabelStyle: {
					width: 100,
					color: Colors.primaryText,
				},
			}}
			// initialRouteName=""
		>
			<Tab.Screen name="All Anime" component={AllAnime} />
			<Tab.Screen name="Simulcasts" component={AllAnime} />
			<Tab.Screen name="Anime Genres" component={AnimeGenres} />
		</Tab.Navigator>
	);
};
export default Browse;
