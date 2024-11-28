import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { AlertCard } from '../components/AlertCard';

const dummyAlerts = [
     {
          id: 1,
          type: 'fire',
          message: 'Fire detected!',
          room: 'Kitchen',
          time: '2 mins ago',
     },
     {
          id: 2,
          type: 'success',
          message: 'Fire successfully extinguished',
          room: 'Kitchen',
          time: '1 min ago',
     },
     {
          id: 3,
          type: 'temperature',
          message: 'High temperature detected',
          room: 'Garage',
          time: '5 mins ago',
     },
];

export default function Alerts() {
     return (
          <View style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    {dummyAlerts.map(alert => (
                         <AlertCard key={alert.id} {...alert} />
                    ))}
               </ScrollView>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#f5f7fa',
     },
     scrollView: {
          flex: 1,
     },
});
