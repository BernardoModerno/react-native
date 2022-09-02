import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../types';
import UserDetail from './UserDetail';
import { constants} from "../constants"

function UserList() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <View>
      <Text style={styles.h1}>User List</Text>
      <View style={styles.container}>
        
      </View>

      {selectedUser && <UserDetail selectedUser={selectedUser} />}
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  container: {
  },
  avatar: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 10,
  },
  avatarSelected: {
  },
});

export default UserList;
