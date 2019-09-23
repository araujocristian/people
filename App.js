import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

const App = () => {
  const [peoples, setPeoples] = useState([]);

  const loadUsers = async () => {
    const response = await axios.get(
      'https://randomuser.me/api/?nat=br&results=5',
    );

    const {results} = response.data;

    setPeoples(results);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Fragment>
      <Header title="Pessoas" />
      <FlatList
        data={peoples}
        renderItem={({item}) => <Text>{item.name.first}</Text>}
        keyExtractor={item => item.email}
      />
    </Fragment>
  );
};

export default App;
