import React, {Fragment, useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

import PeopleListItem from '../components/PeopleListItem';

const PeoplePage = () => {
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
      <FlatList
        contentContainerStyle={styles.container}
        data={peoples}
        renderItem={({item}) => <PeopleListItem people={item} />}
        keyExtractor={item => item.email}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});
export default PeoplePage;
