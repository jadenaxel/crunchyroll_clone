import type { FC } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Colors } from "@/constants";

import { WatchList, CrunchyList } from "@/pages/list";

const Tab = createMaterialTopTabNavigator();

const List: FC = (): JSX.Element => {
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
				}
			}}
			initialRouteName="CRUNCHYLISTS"
		>
			<Tab.Screen name="WATCHLIST" component={WatchList} />
			<Tab.Screen name="CRUNCHYLISTS" component={CrunchyList} />
			<Tab.Screen name="HISTORY" component={WatchList} />
			<Tab.Screen name="OFFLINE" component={WatchList} />
		</Tab.Navigator>
	);
};
export default List;
