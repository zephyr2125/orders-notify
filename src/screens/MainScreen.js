import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNavigation, IconButton, Text } from 'react-native-paper'
import TopNavigation from '../components/TopNavigation'
import StartScreen from '../components/Start'
import NotifyScreen from '../components/Notify'

import { theme } from '../core/theme'

const Start = () => <StartScreen />

const Notify = () => <NotifyScreen />

export default function MainScreen() {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'start',
      title: 'Trang chủ',
      icon: 'home',
    },
    {
      key: 'notify',
      title: 'Thông báo',
      icon: 'file-chart-outline',
    },
  ])

  const renderScene = BottomNavigation.SceneMap({
    start: Start,
    notify: Notify
  })

  return (
    <View style={styles.screen}>
      <TopNavigation />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#fff' }}
        activeColor={theme.colors.primary}
        style={styles.bottomNavigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomNavigation: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
})
