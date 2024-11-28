
// app/settings.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Settings Page</Text>
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
