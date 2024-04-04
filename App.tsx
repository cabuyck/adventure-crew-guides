import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Parents from './components/Parents/Parents';
import Guides from './components/Guides/Guides';

// Define your Parent and Guide screens/components similarly to Guides

const Tab = createBottomTabNavigator();

const ParentNavigator = () => {
  return (
    <Tab.Navigator>
      <Parents />
    </Tab.Navigator>
  );
};

const GuideNavigator = () => {
  return (
    <Guides />
  );
};

export default function App() {
  const [userRole, setUserRole] = useState<'None' | 'Parent' | 'Guide'>('None');

  const renderNavigator = () => {
    switch (userRole) {
      case 'Parent':
        return <ParentNavigator />;
      case 'Guide':
        return <GuideNavigator />;
      default:
        return (
          <View style={styles.container}>
            <Button title="I'm a Parent" onPress={() => setUserRole('Parent')} />
            <Button title="I'm a Guide" onPress={() => setUserRole('Guide')} />
          </View>
        );
    }
  };

  return (
    <NavigationContainer>
      {renderNavigator()}
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%', // Ensure the container fills its parent
  },
});
