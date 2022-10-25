import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getIndieNotificationInbox, deleteIndieNotificationInbox } from 'native-notify';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notify = () => {
    // get data form AsyncStorage
    const [userKey, setUserKey] = useState('');
    const [hasKey, setHasKey] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('key_order_notify');
          
        if (jsonValue !== null && JSON.parse(jsonValue) !== "") {
          const value = JSON.parse(jsonValue);
          setUserKey(value);
          setHasKey(true);
        } 
        else{
          setHasKey(false);
        }
      } catch(e) {
        console.log(e)
      }
    }

  useEffect(async () => {
    console.log('a');
    getData();
    let notifications = await getIndieNotificationInbox('huanth', 4515, 'GD2EaTbd0BEOBVDWEp1GTj');
    console.log("notifications: ", notifications);
    setData(notifications);
  },[]) 

  return (
    <View style={styles.pageContainer}>
        {
          hasKey ? (
            <View>
              {
                data.map((item) => (
                  <Text key={item.notification_id}>
                    <Text>{item.title}</Text>
                    <Text>{item.message}</Text>
                    <Text>{item.date}</Text>
                  </Text>
                ))
              }
            </View>
          ) :
          (
            <View>
              <Text>No Key</Text>
            </View>
          )
        }
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

export default Notify;
