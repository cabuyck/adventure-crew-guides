import React from 'react';
import { Text } from 'react-native';

interface ProgressMeterLabelProps {
  children: React.ReactNode;
}

const ProgressMeterLabel: React.FC<ProgressMeterLabelProps> = ({ children }) => (
  <Text style={{paddingHorizontal: 10, paddingTop: 5, paddingBottom: 2, fontSize: 12, fontWeight:'bold'}}>{children}</Text>
);

export default ProgressMeterLabel;