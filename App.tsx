import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

import UserList from './src/components/UserList';
import UserDetail from './src/components/UserDetail';
import { Color } from './src/constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://w3lcome.com/wp-content/uploads/2019/09/logo-retina.png' }}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>
      <View style={styles.content}>
        <UserList />
        <UserDetail/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
  },
  header: {
    padding: 15,
    backgroundColor: Color.BACKGROUND_DARK,
  },
  logo: {
    height: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
