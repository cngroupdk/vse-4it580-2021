import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

import { QuackNative } from './src/molecules/';
import { quacks } from './src/mocks';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={quacks}
        renderItem={({ item }) => <QuackNative quack={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 40,
  },
});
