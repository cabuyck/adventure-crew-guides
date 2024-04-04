import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const LogbookVerseDisplay = () => (
    <Card style={styles.card}>
        <Card.Title
            title="Mile Marker #6"
            titleVariant='headlineLarge'
            subtitle="Card Subtitle"
        />
        <Card.Content>
        <Card.Title
            title="Mile Marker"
            titleVariant='bodyMedium'
        />
            <Text variant="bodyMedium">Lorem Ipsum Dolor Sit Amet</Text>
        <Card.Title
            title="Extra Mile"
            titleVariant='bodyMedium'
            subtitle="Lorem Ipsum Dolor Sit Amet"
            subtitleVariant='bodyMedium'
        />
            <Text variant="bodyMedium">Lorem Ipsum Dolor Sit Amet</Text>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        margin: 10
    }
});

export default LogbookVerseDisplay;