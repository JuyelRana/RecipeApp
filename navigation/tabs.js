import React from "react";
import {
    View,
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {Home} from "../screens"
import {COLORS, icons} from "../constants";
import {TabIcon} from "../components/Global";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.white,
                borderTopColor: "transparent",
                height: 100
            }
        }}>
            <Tab.Screen
                name="Home"
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.home}/>
                }}
                component={Home}/>

            <Tab.Screen
                name="Search"
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.search}/>
                }}
                component={Home}/>

            <Tab.Screen
                name="Bookmark"
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.bookmark}/>
                }}
                component={Home}/>

            <Tab.Screen
                name="Settings"
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.settings}/>
                }}
                component={Home}/>

        </Tab.Navigator>
    )
}

export default Tabs;
