import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const HydraGuardCard = ({ room, temperature, status, lastChecked, onPress }) => {
     const [pressScale] = React.useState(new Animated.Value(1));

     const getStatusColor = (status) => {
          switch (status) {
               case 'Active':
                    return '#27ae60';
               case 'Warning':
                    return '#f39c12';
               case 'Alert':
                    return '#e74c3c';
               default:
                    return '#95a5a6';
          }
     };

     const onPressIn = () => {
          Animated.spring(pressScale, {
               toValue: 0.97,
               useNativeDriver: true,
          }).start();
     };

     const onPressOut = () => {
          Animated.spring(pressScale, {
               toValue: 1,
               useNativeDriver: true,
          }).start();
     };

     return (
          <TouchableOpacity
               activeOpacity={1}
               onPressIn={onPressIn}
               onPressOut={onPressOut}
               onPress={onPress}  // Add this line
          >
               <Animated.View
                    style={[
                         styles.card,
                         { transform: [{ scale: pressScale }] }
                    ]}
               >
                    <View style={styles.cardHeader}>
                         <View style={styles.roomInfo}>
                              <Text style={styles.roomName}>{room}</Text>
                              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(status) }]}>
                                   <Text style={styles.statusText}>{status}</Text>
                              </View>
                         </View>
                         <FontAwesome5 name="chevron-right" size={16} color="#95a5a6" />
                    </View>

                    <View style={styles.cardBody}>
                         <View style={styles.temperatureContainer}>
                              <FontAwesome5 name="temperature-high" size={20} color="#4a90e2" solid />
                              <Text style={styles.temperature}>{temperature}°C</Text>
                         </View>
                         <View style={styles.timeContainer}>
                              <FontAwesome5 name="clock" size={14} color="#95a5a6" />
                              <Text style={styles.lastChecked}>{lastChecked}</Text>
                         </View>
                    </View>
               </Animated.View>
          </TouchableOpacity>
     );
};

const styles = StyleSheet.create({
     card: {
          backgroundColor: '#ffffff',
          borderRadius: 16,
          padding: 16,
          marginHorizontal: 16,
          marginVertical: 8,
          ...Platform.select({
               ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
               },
               android: {
                    elevation: 3,
               },
          }),
     },
     cardHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
     },
     roomInfo: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
     },
     roomName: {
          fontSize: 18,
          fontWeight: '600',
          color: '#2c3e50',
          marginRight: 12,
     },
     statusBadge: {
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 12,
     },
     statusText: {
          color: '#ffffff',
          fontSize: 12,
          fontWeight: '600',
     },
     cardBody: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     temperatureContainer: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     temperature: {
          fontSize: 16,
          fontWeight: '500',
          marginLeft: 8,
          color: '#2c3e50',
     },
     timeContainer: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     lastChecked: {
          fontSize: 14,
          color: '#95a5a6',
          marginLeft: 6,
     },
});
