import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { FlatList, View, Platform, StyleSheet, Text } from 'react-native';

import { QuackNative } from '../molecules/';
import { quacks } from '../mocks';

const HOME_QUERY = gql`
  query Quacks {
    quacks {
      id
      createdAt
      user {
        id
        name
        userName
        profileImageUrl
      }
      text
    }
  }
`;

export function HomeScreen() {
  const response = useQuery(HOME_QUERY);
  const quacks = response.data?.quacks ?? [];

  return (
    <>
      <FlatList
        refreshing={response.loading}
        onRefresh={() => {
          response.refetch();
        }}
        data={quacks}
        renderItem={({ item: quack }) => <QuackNative quack={quack} />}
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({ highlighted }) => (
            <View
              style={[styles.separator, highlighted && { marginLeft: 0 }]}
            />
          ))
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
