import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function QuackNative({ quack }) {
  const {
    user: { name, userName, profileImageUrl },
    text,
    createdAt,
  } = quack;

  return (
    <View style={styles.wrapper}>
      <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.nameWrapper}>
          <Text style={styles.name}>{name}</Text>{' '}
          <Text style={styles.userName}>@{userName}</Text>
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    marginRight: 8,
    borderRadius: 6,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  nameWrapper: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    color: 'gray',
  },
  text: {
    paddingTop: 8,
    fontSize: 18,
  },
});
