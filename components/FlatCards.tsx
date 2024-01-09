import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: '#ffffff' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{ color: '#ffffff' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: '#ffffff' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: '#ffffff' }}>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginVertical: 16,
  },
  container: {
    flex:1,
    flexDirection:'row',
    padding:8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#ED2939',
  },
  cardTwo: {
    backgroundColor: '#FF2400',
  },
});
