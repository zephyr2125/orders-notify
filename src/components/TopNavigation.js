import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { theme } from '../core/theme'

export default function TopNavigation() {
  return (
    <View style={styles.navigation}>
      <Text style={styles.text}>Order Notify</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navigation: {
    color: theme.colors.primary,
    padding: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxHeight: 100,
    height: '100%'
  },
  text: {
    fontSize: 28,
  }
})
