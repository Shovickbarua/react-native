import React from "react";
import {View, SafeAreaView, Text, StyleSheet, useColorScheme} from "react-native";

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.darkText }>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center'
  },
  whiteText:{
    color: 'white'
  },
  darkText: {
    color: 'black'
  }
})
export default AppPro;