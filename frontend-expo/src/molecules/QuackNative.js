import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { formatDate } from '../utils/date';

export function QuackNative({ quack, style }) {
  const {
    user: { name, userName, profileImageUrl },
    text,
    createdAt,
  } = quack;

  return (
    <View style={[styles.wrapper, style]}>
      <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.nameWrapper}>
          <Text style={styles.name}>{name}</Text>{' '}
          <Text style={styles.userName}>@{userName}</Text>
          {' - '}
          <Text style={styles.createdAt}>{formatDate(createdAt)}</Text>
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  nameWrapper: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 12,
    color: 'gray',
  },
  createdAt: {
    color: 'gray',
  },
  text: {
    fontSize: 16,
  },
});
