import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { CartPage, MainMenu, ProfilePage } from '../Screens';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainMenu} />
            <Tab.Screen name="Cart" component={CartPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    );
};

export default TabBar;
