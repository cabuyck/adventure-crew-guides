import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import ProgressMeter from './ProgressMeter';
import ProgressDisplay from './ProgressDisplay';
import ProgressDisplayProps from './ProgressDisplay';

const campers = [
    {
        name: "Oliver Owen",
        progressState: {
            bookId: 5,
            mileMarkers: [true, false, true, false, true, false, true, false],
            extraMiles: [false, false, false, false, false, false, false, false],
            review1: [false, false],
            review2: [false, false],
            sideTrip: [false]
        }
    },
    {
        name: "Charlie Anderson",
        progressState: {
            bookId: 5,
            mileMarkers: [true, false, true, false, true, false, true, false],
            extraMiles: [false, false, false, false, false, false, false, false],
            review1: [false, false],
            review2: [false, false],
            sideTrip: [false]
        }
    },
    {
        name: "Squirky Squeaks",
        progressState: {
            bookId: 5,
            mileMarkers: [true, false, true, false, true, false, true, false],
            extraMiles: [false, false, false, false, false, false, false, false],
            review1: [false, false],
            review2: [false, false],
            sideTrip: [false]
        }
    },
    {
        name: "Christopher Buyck",
        progressState: {
            bookId: 5,
            mileMarkers: [true, false, true, false, true, false, true, false],
            extraMiles: [false, false, false, false, false, false, false, false],
            review1: [false, false],
            review2: [false, false],
            sideTrip: [false]
        }
    }
]

const LogbookCamperList = () => {
    const renderCamperList = () => {
        return campers.map((camper, index) => (
            <>
                <Divider />
                <List.Accordion title={camper.name} id={index} style={styles.accordion}>
                    <ProgressDisplay progressState={camper.progressState}></ProgressDisplay>
                </List.Accordion>
            </>
        ));
    };

    return (
        <List.AccordionGroup>
            {renderCamperList()}
            <Divider />
        </List.AccordionGroup>
    );
}

const styles = StyleSheet.create({
    accordion: {
        width: '100%', // Ensure accordion fills the container
    },
    accordionContent: {
        width: '100%', // Ensure content fills the accordion
    },
    smallProgressMetersContainer: {
        flex: 1
    }
});

export default LogbookCamperList;