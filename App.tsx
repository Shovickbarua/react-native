import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView></ScrollView>
      <Text>App</Text>
      <FlatCards />
    </SafeAreaView>
  )
}

export default App