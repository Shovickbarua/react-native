import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <SafeAreaView>
     <View>
      <TextInput
      maxLength={14}
      value={}
      clearButtonMode='always' // ios only
      onChangeText={}
      placeholder='Enter Number'
      />
     </View>
    </SafeAreaView>
  )
}

export default App