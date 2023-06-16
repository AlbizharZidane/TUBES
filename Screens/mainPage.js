import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Homepage';


//Screen names
const homeName = "Home";
const cartName = "Details";
const profileName = "Settings";

const Tab = createBottomTabNavigator();

function mainPage() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === cartName) {
                            iconName = focused ? 'cart' : 'cart-outline';

                        } else if (rn === profileName) {
                            iconName = focused ? 'profile' : 'profile-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={cartName} component={DetailsScreen} />
                <Tab.Screen name={profileName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default mainPage;