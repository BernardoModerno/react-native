import React, {useState, useEffect} from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { User } from "../types";
import { constants} from "../constants"


interface UserDetailProps {
  selectedUser: User;
}



function UserDetail({ selectedUser }: UserDetailProps) {

  const [user, setUser] = useState([]);
  const [userSelect, setUserSelect] = useState([]);

  useEffect(()=> {
    async function loadUsers(){
      const response = await constants.get('/users')
      
      // setUser(response.data.data);
      setUserSelect(response.data.data);

    }

    loadUsers();
  }, [])

  
  return (
    <View>
      <Text style={styles.h2}>User Detail</Text>
      {userSelect.map((usuario) => (
      <View style={styles.content}>
      
        <View>
        
          <Text style={styles.row} key={usuario.id}>
            <Text style={styles.bold}>Name:</Text> 
            <Text>{usuario.first_name}</Text> 
          </Text>
          <Text style={styles.row}>
            <Text style={styles.bold}>Last Name:</Text>
            {usuario.last_name}
          </Text>
          <Text style={styles.row}>
            <Text style={styles.bold}>Email:</Text>
            {usuario.email}
          </Text>
        </View>
        <View>
          <Image source={{ uri: usuario.avatar}} style={styles.avatar} />
       
        </View>
      
      </View>
      ))}
      <Button title="Close" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  row: {
    paddingBottom: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});


export default UserDetail;
