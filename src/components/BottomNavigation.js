import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../core/theme'

export default function BottomNavigation(props) {
  const navigation = useNavigation();
  const menuActive = props.active;
  
  const routes = [
    {
      key: 'key',
      title: 'Trang chủ',
      screen: 'KeyScreen'
    },
    {
      key: 'notify',
      title: 'Thông báo',
      screen: 'NotifyScreen'
    }
  ];

  const btnChangeMenu = (key) => {
    const screen = routes.filter((item) => {
      return item.key === key
    })
    const screenActive = screen[0].screen;

    navigation.navigate(screenActive)

  }

  return (
    <View style={styles.navigation}>
    {
      routes.map((item) => (
        <View key={item.key} style={styles.nav}>
          <TouchableOpacity nativeID={item.key} onPress={() => btnChangeMenu(item.key)}>
            <Text style={menuActive == item.key ? styles.menuActive : styles.menu}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))
    }
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    color: theme.colors.primary,
    padding: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    maxHeight: 50,
  },
  text: {
    fontSize: 28,
  },
  nav: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuActive: {
    color: '#0381db'
  }
})
