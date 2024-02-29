import type { FC } from "react";

import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { Header } from "@/components";

const TabLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.secondary, borderTopWidth: 0 },
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.primaryText,
			}}
			initialRouteName="browse"
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => <Feather name={"home"} color={focused ? Colors.primary : Colors.primaryText} size={25} />,
					headerTransparent: true,
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					title: "My Lists",
					tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => <Feather name={"bookmark"} color={focused ? Colors.primary : Colors.primaryText} size={25} />,
					header: () => <Header title={"My Lists"} bg />,
				}}
			/>
			<Tabs.Screen
				name="browse"
				options={{
					title: "Browse",
					tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => <Feather name={"grid"} color={focused ? Colors.primary : Colors.primaryText} size={25} />,
					header: () => <Header title={"Browse"} bg />,
				}}
			/>
			<Tabs.Screen
				name="simulcasts"
				options={{
					title: "Simulcasts",
					tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => <Feather name={"zap"} color={focused ? Colors.primary : Colors.primaryText} size={25} />,
					header: () => <Header title={"Simulcast Season"} bg />,
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Account",
					tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => <Feather name={"user"} color={focused ? Colors.primary : Colors.primaryText} size={25} />,
					header: () => <Header title={"My Account"} bg />,
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
