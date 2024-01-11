import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginVertical: 16,
      },
      container:{
        padding:8
      },
      card:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius: 4,
        margin: 8,
      },
      cardEleveted:{
        backgroundColor : '#CAD5E2',
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#ED2939',
        shadowOpacity: 0.4,
      }
})