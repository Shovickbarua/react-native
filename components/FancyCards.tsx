import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardEleveted]}>
       <Image 
      //  source={{uri: "https://unsplash.com/photos/a-couple-of-men-sitting-at-a-table-with-laptops-WCUQImjKO1s"}}
       source={require('./aa.png')}
       style={styles.cardImage}
       />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa</Text>
        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style={styles.cardDescription}>hfghgrfhfshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhg</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card:{
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16

    },
    cardEleveted:{

    },
    cardImage:{
      height: 180,
      // width:'100%'
    },
    cardBody:{

    },
    cardTitle:{
        
    },
    cardLabel:{},
    cardDescription:{},
    cardFooter:{},
})