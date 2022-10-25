import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { registerIndieID  } from 'native-notify'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Start = () => {
    // get data form AsyncStorage
    const [userKey, setUserKey] = useState('');

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('key_order_notify');
            
            if (jsonValue !== null) {
              const value = JSON.parse(jsonValue);
              setUserKey(value);
              registerIndieID(userKey, 4515, 'GD2EaTbd0BEOBVDWEp1GTj');
            }
          } catch(e) {
            console.log(e)
          }
    }

    const submitKeyBtn = () => {
      AsyncStorage.setItem('key_order_notify', JSON.stringify(userKey))
      registerIndieID(userKey, 4515, 'GD2EaTbd0BEOBVDWEp1GTj');
    }

    useEffect(() => {
        getData();
    } ,[]) 

  return (
    <View style={styles.pageContainer}>
        <Text>Enter your key</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUserKey(text)}
          value={userKey}
          placeholder="Enter key"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.submitKeyBtn} onPress={() => submitKeyBtn(userKey)}>
          <Text style={styles.submitKeyBtn}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})

export default Start;
