import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Platform,
} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { QuackNative } from './src/molecules/';
import { quacks } from './src/mocks';
import { HomeScreen } from './src/screens/HomeScreen';

const client = new ApolloClient({
  uri: 'http://dev.backend.heracek.vse.handson.pro/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  separator: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
