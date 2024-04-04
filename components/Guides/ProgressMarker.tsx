import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

interface ProgressMarkerProps {
  isActive: boolean;
  onPress: () => void;
  label: string;
}

const { width } = Dimensions.get('window'); // Get the width of the screen
const baseWidth = 100; // Example base width for a phone screen
const scaleFactor = width / baseWidth; // Calculate the scaling factor

const ProgressMarker: React.FC<ProgressMarkerProps> = ({ isActive, onPress, label }) => {
  const markerStyle = isActive ? { ...styles.activeMarker, ...markerStyles(scaleFactor) } : { ...styles.inactiveMarker, ...markerStyles(scaleFactor) };

  return (
    <TouchableOpacity onPress={onPress} style={markerStyle}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const markerStyles = (scaleFactor: number) => ({
  width: 10 * scaleFactor,
  height: 10 * scaleFactor,
  borderRadius: 999,
  borderWidth: 5,
});

const styles = StyleSheet.create({
  activeMarker: {
    borderColor: 'green',
    backgroundColor: '#90ee90'
  },
  inactiveMarker: {
    borderColor: 'gray',
    backgroundColor: '#d3d3d3'
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ProgressMarker;
