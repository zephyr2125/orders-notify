import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { getIndieNotificationInbox, deleteIndieNotificationInbox } from 'native-notify';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopNavigation from '../components/TopNavigation'
import BottomNavigation from '../components/BottomNavigation'

export default function NotifyScreen() {
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

            let notifications = await getIndieNotificationInbox(value, 4515, 'GD2EaTbd0BEOBVDWEp1GTj');
            setData(notifications);
        } 
        else{
          setHasKey(false);
        }
      } catch(e) {
        console.log(e)
      }
    }

    useEffect(async () => {
        getData();
    },[]) 

  return (
    <View style={styles.screenContainer}>
        <TopNavigation />
        <View style={styles.pageContainer}>
        {
          hasKey ? (
            <View>
              {
                data.map((item) => (
                    <View key={item.notification_id} style={styles.item}>
                        <View style={styles.boxItem}>
                            <Image source={JSON.parse(item.pushData).image} style={styles.image} />
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{item.message}</Text>
                            </View>
                        </View>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
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
        <BottomNavigation active="notify" />
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
      justifyContent: 'space-between',
      flex: 1
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    item: {
        marginBottom: 1,
        paddingBottom: 10,
        backgroundColor: '#bfdfff',
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    boxItem: {
        flexDirection: 'row'
    },
    date: {
        fontSize: 12,
        textAlign: 'right',
        fontStyle: 'italic'
    }

  })
  