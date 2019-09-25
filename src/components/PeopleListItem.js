import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const PeopleListItem = ({people}) => {
  const {
    name: {title, first, last},
    picture: {thumbnail},
  } = people;
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{uri: thumbnail}} />
        <Text style={styles.lineText}>{`${title} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',

    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    flex: 7,
    fontSize: 20,
    paddingLeft: 15,
    textTransform: 'capitalize',
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});
export default PeopleListItem;
