import * as React from 'react';
import { DataTable } from 'react-native-paper';
import LogbookCamperList from './LogbookCamperList';
import LogbookVerseDisplay from './LogbookVerseDisplay';
import { ScrollView, View } from 'react-native';

const Logbook = () => {

  return (
    <View>
        <LogbookVerseDisplay />
        <LogbookCamperList />
    </View>
  );
};

export default Logbook;