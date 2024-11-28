import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function RoomDetail() {
     const { roomName, deviceId } = useLocalSearchParams();

     // Dummy data for the room
     const roomData = {
          temperature: (20 + Math.random() * 10).toFixed(1),
          humidity: (40 + Math.random() * 30).toFixed(1),
          status: 'Active',
          lastChecked: 'Just now',
          batteryLevel: (60 + Math.random() * 40).toFixed(0),
     };

     return (
          <ScrollView style={styles.container}>
               <View style={styles.header}>
                    <Text style={styles.roomName}>{roomName}</Text>
                    <Text style={styles.deviceId}>{deviceId}</Text>
               </View>

               <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                         <FontAwesome5 name="temperature-high" size={24} color="#4a90e2" solid />
                         <Text style={styles.statValue}>{roomData.temperature}°C</Text>
                         <Text style={styles.statLabel}>Temperature</Text>
                    </View>

                    <View style={styles.statCard}>
                         <FontAwesome5 name="tint" size={24} color="#4a90e2" solid />
                         <Text style={styles.statValue}>{roomData.humidity}%</Text>
                         <Text style={styles.statLabel}>Humidity</Text>
                    </View>

                    <View style={styles.statCard}>
                         <FontAwesome5 name="battery-three-quarters" size={24} color="#4a90e2" solid />
                         <Text style={styles.statValue}>{roomData.batteryLevel}%</Text>
                         <Text style={styles.statLabel}>Battery</Text>
                    </View>
               </View>

               <View style={styles.statusCard}>
                    <View style={styles.statusHeader}>
                         <Text style={styles.statusTitle}>Device Status</Text>
                         <View style={[styles.statusBadge, { backgroundColor: '#27ae60' }]}>
                              <Text style={styles.statusText}>{roomData.status}</Text>
                         </View>
                    </View>
                    <Text style={styles.lastChecked}>Last checked: {roomData.lastChecked}</Text>
               </View>
          </ScrollView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#f5f7fa',
     },
     header: {
          padding: 20,
          backgroundColor: '#ffffff',
     },
     roomName: {
          fontSize: 24,
          fontWeight: '700',
          color: '#2c3e50',
          marginBottom: 4,
     },
     deviceId: {
          fontSize: 14,
          color: '#95a5a6',
     },
     statsContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
     },
     statCard: {
          backgroundColor: '#ffffff',
          borderRadius: 16,
          padding: 16,
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 6,
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
     statValue: {
          fontSize: 20,
          fontWeight: '600',
          color: '#2c3e50',
          marginTop: 8,
     },
     statLabel: {
          fontSize: 12,
          color: '#95a5a6',
          marginTop: 4,
     },
     statusCard: {
          backgroundColor: '#ffffff',
          margin: 20,
          borderRadius: 16,
          padding: 20,
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
     statusHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
     },
     statusTitle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#2c3e50',
     },
     statusBadge: {
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 12,
     },
     statusText: {
          color: '#ffffff',
          fontSize: 14,
          fontWeight: '600',
     },
     lastChecked: {
          fontSize: 14,
          color: '#95a5a6',
     },
});
