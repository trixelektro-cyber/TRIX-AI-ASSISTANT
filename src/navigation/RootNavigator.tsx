import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Chat from '../screens/Chat';
import Knowledge from '../screens/Knowledge';
import Projects from '../screens/Projects';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Knowledge" component={Knowledge} />
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
