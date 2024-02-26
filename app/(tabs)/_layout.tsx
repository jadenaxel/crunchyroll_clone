import type { FC } from "react";

import { Tabs } from "expo-router";

const TabLayout: FC = (): JSX.Element => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Tab One" }} />
        </Tabs>
    );
};

export default TabLayout;
