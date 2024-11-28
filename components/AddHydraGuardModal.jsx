import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddHydraGuardModal({ visible, onClose, onAddDevice }) {
     const [roomName, setRoomName] = useState('');

     const handleAddDevice = () => {
          if (roomName.trim()) {
               // Create new device data
               const newDevice = {
                    id: `HG-${Math.random().toString(36).substr(2, 9)}`.toUpperCase(),
                    room: roomName,
                    temperature: (20 + Math.random() * 10).toFixed(1),
                    status: 'Active',
                    lastChecked: 'Just now'
               };

               // Pass the new device to parent component
               onAddDevice(newDevice);

               // Reset and close modal
               setRoomName('');
               onClose();
          }
     };

     return (
          <Modal
               visible={visible}
               transparent
               animationType="slide"
               onRequestClose={onClose}
          >
               <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.modalContainer}
               >
                    <View style={styles.modalContent}>
                         <View style={styles.header}>
                              <Text style={styles.title}>Add New HydraGuard</Text>
                              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                   <FontAwesome5 name="times" size={20} color="#95a5a6" />
                              </TouchableOpacity>
                         </View>

                         <View style={styles.inputContainer}>
                              <FontAwesome5 name="home" size={20} color="#4a90e2" style={styles.inputIcon} />
                              <TextInput
                                   style={styles.input}
                                   placeholder="Enter Room Name"
                                   value={roomName}
                                   onChangeText={setRoomName}
                                   autoFocus
                              />
                         </View>

                         <TouchableOpacity
                              style={[styles.addButton, !roomName.trim() && styles.addButtonDisabled]}
                              onPress={handleAddDevice}
                              disabled={!roomName.trim()}
                         >
                              <FontAwesome5 name="plus" size={16} color="#ffffff" style={styles.buttonIcon} />
                              <Text style={styles.buttonText}>Add Device</Text>
                         </TouchableOpacity>
                    </View>
               </KeyboardAvoidingView>
          </Modal>
     );
}

const styles = StyleSheet.create({
     modalContainer: {
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)',
     },
     modalContent: {
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          minHeight: 300,
     },
     header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: '600',
          color: '#2c3e50',
     },
     closeButton: {
          padding: 8,
     },
     inputContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f5f7fa',
          borderRadius: 12,
          paddingHorizontal: 16,
          marginBottom: 20,
     },
     inputIcon: {
          marginRight: 12,
     },
     input: {
          flex: 1,
          height: 50,
          fontSize: 16,
          color: '#2c3e50',
     },
     addButton: {
          backgroundColor: '#4a90e2',
          borderRadius: 12,
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
     },
     addButtonDisabled: {
          backgroundColor: '#95a5a6',
     },
     buttonIcon: {
          marginRight: 8,
     },
     buttonText: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '600',
     },
});
