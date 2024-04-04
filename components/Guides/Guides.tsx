import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logbook from './Logbook';

const News = () => (
  <View style={styles.container}>The latest headlines from Adventure Crew</View>
);

const TheLogbook = () => (
  <ScrollView style={styles.container}><Logbook /></ScrollView>
);

const Help = () => (
  <View style={styles.container}>Reach out for help.</View>
);

const Tab = createBottomTabNavigator();

function Guides() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === 'News') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Logbook') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Help') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else {
              iconName = 'ios-information-circle'; // Default icon, ensures iconName is never undefined
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >

        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Logbook" component={TheLogbook} />
        <Tab.Screen name="Help" component={Help} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%', // Ensure the container fills its parent
  },
});

export default Guides;