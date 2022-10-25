import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { registerIndieID  } from 'native-notify'
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopNavigation from '../components/TopNavigation'
import BottomNavigation from '../components/BottomNavigation'

export default function KeyScreen() {
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
    <View style={styles.screenContainer}>
        <TopNavigation />
        <View style={styles.pageContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setUserKey(text)}
            value={userKey}
            placeholder="Enter key"
            keyboardType="default"
          />
          <TouchableOpacity style={styles.submitKeyBtn} onPress={() => submitKeyBtn(userKey)}>
            <Text style={styles.submitKeyTextBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
        <BottomNavigation active="key" />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  pageContainer: {
    maxWidth: 375,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    width: 200
  },
  submitKeyBtn: {
    display: 'flex',
    backgroundColor: '#487ed9',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    borderRadius: 10
  },
  submitKeyTextBtn: {
    color: '#fff',
  }
})
