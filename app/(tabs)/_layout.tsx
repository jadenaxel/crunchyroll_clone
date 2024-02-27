import type { FC } from "react";

import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { Header } from "@/components";

const TabLayout: FC = (): JSX.Element => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.secondary },
				tabBarIcon: () => <Feather name={"home"} color={Colors.primaryText} size={25} />,
				tabBarLabelStyle: { color: Colors.primaryText },
				header: () => <Header />,
			}}
		>
			<Tabs.Screen name="index" options={{ title: "Home", headerTransparent: true }} />
		</Tabs>
	);
};

export default TabLayout;
