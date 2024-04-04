import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ProgressMeter from './ProgressMeter';
import ProgressMeterLabel from './ProgressMeterLabel';

interface ProgressDisplayProps {
    progressState: ProgressState
  }
  
interface ProgressState {
    mileMarkers: boolean[];
    extraMiles: boolean[];
    review1: boolean[];
    review2: boolean[];
    sideTrip: boolean[];
  }

const ProgressDisplay: React.FC<ProgressDisplayProps> = ({ progressState }) => (
    <View style={{paddingBottom: 10}}>
        <ProgressMeterLabel>Mile Markers</ProgressMeterLabel>
        <ProgressMeter state={progressState.mileMarkers} />
        <ProgressMeterLabel>Extra Miles</ProgressMeterLabel>
        <ProgressMeter state={progressState.extraMiles} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <ProgressMeterLabel>Review #1</ProgressMeterLabel>
                <ProgressMeter state={progressState.review1} customMarkerLabels={["MM", "EX"]} />
            </View>
            <View>
                <ProgressMeterLabel>Review #2</ProgressMeterLabel>
                <ProgressMeter state={progressState.review2} customMarkerLabels={["MM", "EX"]} />
            </View>
            <View>
                <ProgressMeterLabel>Side Trip</ProgressMeterLabel>
                <ProgressMeter state={progressState.sideTrip} customMarkerLabels={["ST"]}/>
            </View>
        </View>
    </View>
);

export default ProgressDisplay