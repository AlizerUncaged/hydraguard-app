import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = ({ deviceCount, avgTemp }) => {
  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        colors={['#4a90e2', '#357abd']}
        style={styles.statsCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.statItem} activeOpacity={0.7}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="shield-alt" size={24} color="#ffffff" solid />
          </View>
          <Text style={styles.statNumber}>{deviceCount}</Text>
          <Text style={styles.statLabel}>HydraHeads</Text>
        </TouchableOpacity>
        
        <View style={styles.divider} />
        
        <TouchableOpacity style={styles.statItem} activeOpacity={0.7}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="temperature-high" size={24} color="#ffffff" solid />
          </View>
          <Text style={styles.statNumber}>{avgTemp}°C</Text>
          <Text style={styles.statLabel}>Avg. Temp</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: '#1a2a3a',
  },
  statsCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 20,
  },
});

