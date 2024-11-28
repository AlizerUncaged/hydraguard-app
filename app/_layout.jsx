import { Tabs } from 'expo-router';
import { View, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import AddHydraGuardModal from '../components/AddHydraGuardModal';

const HEADER_HEIGHT = Platform.OS === 'ios' ? 96 : 80;

export default function Layout() {
     const [isModalVisible, setModalVisible] = useState(false);

     const handleAddDevice = () => {
          setModalVisible(true);
     };

     return (<>
          <Tabs
               screenOptions={({ route }) => ({
                    headerStyle: {
                         height: HEADER_HEIGHT,
                         backgroundColor: '#1a2a3a',
                         elevation: 0,
                         shadowOpacity: 0,
                    },
                    headerTitleStyle: {
                         fontWeight: '600',
                         fontSize: 20,
                         color: '#ffffff',
                    },
                    headerTitleAlign: 'left',
                    headerBackground: () => (
                         <View style={{ flex: 1, backgroundColor: '#1a2a3a' }}>
                              {Platform.OS === 'ios' && (
                                   <BlurView
                                        intensity={100}
                                        tint="dark"
                                        style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             right: 0,
                                             bottom: 0,
                                        }}
                                   />
                              )}
                         </View>
                    ),
                    headerLeft: () => {
                         let iconName = '';
                         switch (route.name) {
                              case 'index':
                                   iconName = 'fire-extinguisher';
                                   break;
                              case 'alerts':
                                   iconName = 'exclamation-circle';
                                   break;
                              case 'settings':
                                   iconName = 'sliders-h';
                                   break;
                              case 'emergency':
                                   iconName = 'first-aid';
                                   break;
                         }
                         return (
                              <TouchableOpacity style={{ marginLeft: 16, padding: 8 }}>
                                   <FontAwesome5
                                        name={iconName}
                                        size={22}
                                        color="#ffffff"
                                   />
                              </TouchableOpacity>
                         );
                    },
                    headerRight: () => {
                         let iconName = '';
                         let secondaryIcon = '';
                         switch (route.name) {
                              case 'index':
                                   return (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                             <TouchableOpacity style={{ marginRight: 20, padding: 8 }}>
                                                  <FontAwesome5 name="sync" size={20} color="#ffffff" />
                                             </TouchableOpacity>
                                             <TouchableOpacity
                                                  style={{ padding: 8 }}
                                                  onPress={() => setModalVisible(true)}
                                             >
                                                  <FontAwesome5 name="plus-circle" size={22} color="#ffffff" />
                                             </TouchableOpacity>
                                        </View>
                                   );
                              case 'alerts':
                                   iconName = 'bell';
                                   secondaryIcon = 'filter';
                                   break;
                              case 'settings':
                                   iconName = 'ellipsis-h';
                                   break;
                              case 'emergency':
                                   iconName = 'phone';
                                   secondaryIcon = 'info-circle';
                                   break;
                         }
                         return (
                              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                   {secondaryIcon && (
                                        <TouchableOpacity style={{ marginRight: 20, padding: 8 }}>
                                             <FontAwesome5
                                                  name={secondaryIcon}
                                                  size={20}
                                                  color="#ffffff"
                                             />
                                        </TouchableOpacity>
                                   )}
                                   <TouchableOpacity style={{ padding: 8 }}>
                                        <FontAwesome5
                                             name={iconName}
                                             size={22}
                                             color="#ffffff"
                                        />
                                   </TouchableOpacity>
                              </View>
                         );
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                         const icons = {
                              index: 'home',
                              alerts: 'bell',
                              settings: 'cogs',
                              emergency: 'phone-alt'
                         };

                         return (
                              <FontAwesome5
                                   name={icons[route.name] || 'circle'}
                                   size={size - 2}
                                   color={color}
                                   solid={focused}
                              />
                         );
                    },
                    tabBarActiveTintColor: '#4a90e2',
                    tabBarInactiveTintColor: '#95a5a6',
                    tabBarStyle: {
                         backgroundColor: '#ffffff',
                         borderTopWidth: 0,
                         elevation: 8,
                         shadowColor: '#000',
                         shadowOffset: { width: 0, height: -3 },
                         shadowOpacity: 0.1,
                         shadowRadius: 4,
                         height: 60,
                         paddingBottom: 8,
                         paddingTop: 8,
                    },
                    tabBarLabelStyle: {
                         fontSize: 12,
                         fontWeight: '500',
                         marginTop: 4,
                    },
               })}
          >
               <Tabs.Screen
                    name="index"
                    options={{
                         title: 'HydraGuard',
                         tabBarLabel: 'Home',
                    }}
               />
               <Tabs.Screen
                    name="alerts"
                    options={{
                         title: 'Alerts',
                         tabBarLabel: 'Alerts',
                    }}
               />
               <Tabs.Screen
                    name="settings"
                    options={{
                         title: 'Settings',
                         tabBarLabel: 'Settings',
                    }}
               />
               <Tabs.Screen
                    name="emergency"
                    options={{
                         title: 'Emergency',
                         tabBarLabel: 'Emergency',
                    }}
               />
               <Tabs.Screen
                    name="room-detail"
                    options={{
                         title: 'Room Detail',
                         tabBarLabel: 'Room Detail',
                    }}
               />
          </Tabs>

          <AddHydraGuardModal
               visible={isModalVisible}
               onClose={() => setModalVisible(false)}
               onAddDevice={handleAddDevice}
          />
     </>
     );
}