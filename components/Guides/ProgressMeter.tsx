import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ProgressMarker from './ProgressMarker';

interface ProgressMeterProps {
  state: boolean[],
  customMarkerLabels?: string[]
}

const ProgressMeter: React.FC<ProgressMeterProps> = ({ state, customMarkerLabels }) => {
  const [activeDots, setActiveDots] = useState<Array<boolean>>(state);

  const toggleDot = (index: number) => {
    const updatedActiveDots = [...activeDots];
    updatedActiveDots[index] = !updatedActiveDots[index];
    setActiveDots(updatedActiveDots);
  };

  const renderDots = () => {
    function getMarkerLabel(index: number): string {
      return customMarkerLabels && customMarkerLabels[index] ? customMarkerLabels[index] : (index + 1).toString();
    }

    return activeDots.map((isActive, index) => (
      <View style={{marginRight: 6}}>
        <ProgressMarker key={index} isActive={isActive} onPress={() => toggleDot(index)} label={getMarkerLabel(index)} />
      </View>
    ));
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{paddingLeft: 10}}>
        {/* <Text style={styles.label}>
          {label}
        </Text> */}
        <View style={styles.container}>
          {renderDots()}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  label: {
    padding: 10,
    //minWidth: 50,
    fontSize: 12
  }
});

export default ProgressMeter;
