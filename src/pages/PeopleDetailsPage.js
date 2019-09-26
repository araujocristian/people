import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';

const PeopleDetailsPage = ({
  navigation: {
    state: {
      params: {people},
    },
  },
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: people.picture.large}} style={styles.avatar} />
      <View style={styles.detailContainer}>
        <Line label={'Email:'} content={people.email} />
        <Line label={'Cidade:'} content={people.location.city} />
        <Line label={'Estado:'} content={people.location.state} />
        <Line label={'Tel.:'} content={people.phone} />
        <Line label={'Cel.:'} content={people.cell} />
        <Line label={'Nacionalidade:'} content={people.nat} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 200,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default PeopleDetailsPage;
