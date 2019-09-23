import React, {Fragment} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

const App = () => {
  const names = axios.get('https://randomuser.me/api/?nat=br&results=5');
  return (
    <Fragment>
      <Header title="Pessoas" />
      <FlatList
        data={names}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={item => item}
      />
    </Fragment>
  );
};

export default App;
