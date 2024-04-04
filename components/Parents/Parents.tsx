// Parents.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Parents() {
  return (
    <View style={styles.container}>
      <Text>This is the Parents component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
