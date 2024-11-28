// app/emergency.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Emergency() {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Emergency Numbers Page</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f7fa',
     },
     text: {
          fontSize: 18,
          color: '#2c3e50',
     },
});