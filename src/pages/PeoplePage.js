import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import PeopleListItem from '../components/PeopleListItem';

const PeoplePage = ({navigation: {navigate}}) => {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://randomuser.me/api/?nat=br&results=150',
      );

      const {results} = response.data;

      setPeoples(results);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Ops... Algo deu errado =(</Text>
      </View>
    );
  }

  return loading ? (
    <ActivityIndicator style={styles.container} size="large" color="#6ca2f7" />
  ) : (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={peoples}
        renderItem={({item}) => (
          <PeopleListItem
            people={item}
            navigateToPeopleDetails={() =>
              navigate('PeopleDetails', {people: item})
            }
          />
        )}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    backgroundColor: '#e2f9ff',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
  },
});
export default PeoplePage;
