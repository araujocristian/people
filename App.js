import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/components/Header';

const App = () => {
  return (
    <Fragment>
      <Header title="Pessoas" />
    </Fragment>
  );
};

export default App;
