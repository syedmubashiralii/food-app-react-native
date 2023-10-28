import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import CartPage from './CartPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'HomeScreen',
          title: 'My Home',
          // tabBarShowLabel:false,
          // tabBarLabelPosition:'beside-icon',
          tabBarLabelStyle: {
            // Define the style for the label text
            color: 'red',
            fontSize: 16, // Example: set the font size to 16
            fontWeight: 'bold', // Example: set the font weight to bold
          },
          tabBarBadge: 3, //accept String or number

          //*******Header Styling****** /
          // headerShown:false,
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerMode: 'screen', //screen
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: '#989595',
          tabBarActiveTintColor: '#6507C3FA',
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#989595',
          tabBarActiveTintColor: '#6507C3FA',
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarInactiveTintColor: '#989595',
          tabBarActiveTintColor: '#6507C3FA',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
