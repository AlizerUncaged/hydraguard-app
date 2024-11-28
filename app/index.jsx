import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { HydraGuardCard } from '../components/HydraGuardCard';
import AddHydraGuardModal from '../components/AddHydraGuardModal';
import { router } from 'expo-router';

const initialDevices = [
     { id: 1, room: 'Living Room', temperature: 24.5, status: 'Active', lastChecked: '2 mins ago' },
     { id: 2, room: 'Kitchen', temperature: 26.8, status: 'Warning', lastChecked: '5 mins ago' },
     { id: 3, room: 'Master Bedroom', temperature: 23.2, status: 'Active', lastChecked: '1 min ago' },
     { id: 4, room: 'Guest Room', temperature: 25.0, status: 'Active', lastChecked: '3 mins ago' },
     { id: 5, room: 'Garage', temperature: 28.5, status: 'Alert', lastChecked: '1 min ago' },
     { id: 6, room: 'Study', temperature: 24.8, status: 'Active', lastChecked: '4 mins ago' },
     { id: 7, room: 'Dining Room', temperature: 25.3, status: 'Active', lastChecked: '2 mins ago' },
     { id: 8, room: 'Bathroom', temperature: 26.0, status: 'Active', lastChecked: '6 mins ago' },
     { id: 9, room: 'Laundry Room', temperature: 27.2, status: 'Warning', lastChecked: '3 mins ago' },
     { id: 10, room: 'Basement', temperature: 22.5, status: 'Active', lastChecked: '5 mins ago' },
];

export default function Home() {
     const [devices, setDevices] = useState(initialDevices);
     const [isModalVisible, setModalVisible] = useState(false);

     const handleAddDevice = (newDevice) => {
          setDevices(prevDevices => [...prevDevices, newDevice]);
     };

     const handleCardPress = (device) => {
          router.push({
               pathname: '/room-detail',
               params: {
                    roomName: device.room,
                    deviceId: device.id,
                    temperature: device.temperature,
                    status: device.status
               }
          });
     };

     const avgTemp = (devices.reduce((acc, curr) => acc + parseFloat(curr.temperature), 0) / devices.length).toFixed(1);


     return (
          <View style={styles.container}>
               <Header deviceCount={devices.length} avgTemp={avgTemp} />
               <ScrollView style={styles.scrollView}>
                    {devices.map(device => (
                         <HydraGuardCard
                              key={device.id}
                              {...device}
                              onPress={() => handleCardPress(device)}
                         />
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