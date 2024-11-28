import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const AlertCard = ({ type, message, time, room }) => {
     const getAlertIcon = (type) => {
          switch (type) {
               case 'fire':
                    return { name: 'fire', color: '#e74c3c' };
               case 'temperature':
                    return { name: 'thermometer-full', color: '#f39c12' };
               case 'success':
                    return { name: 'check-circle', color: '#27ae60' };
               default:
                    return { name: 'info-circle', color: '#3498db' };
          }
     };

     const icon = getAlertIcon(type);

     return (
          <View style={styles.alertCard}>
               <View style={styles.iconContainer}>
                    <FontAwesome name={icon.name} size={24} color={icon.color} />
               </View>
               <View style={styles.contentContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.details}>
                         <Text style={styles.room}>{room}</Text>
                         <Text style={styles.time}>{time}</Text>
                    </View>
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     alertCard: {
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 16,
          marginHorizontal: 16,
          marginVertical: 8,
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
     },
     iconContainer: {
          marginRight: 16,
          justifyContent: 'center',
     },
     contentContainer: {
          flex: 1,
     },
     message: {
          fontSize: 16,
          color: '#2c3e50',
          marginBottom: 8,
     },
     details: {
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     room: {
          fontSize: 14,
          color: '#7f8c8d',
     },
     time: {
          fontSize: 14,
          color: '#7f8c8d',
     },
});

