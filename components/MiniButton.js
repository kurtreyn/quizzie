import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function MiniButton({ label, bgColor }) {
  return (
    <View style={styles.miniButtonContainer}>
      <TouchableOpacity styles={styles.miniButtonContainer}>
        <LinearGradient
          colors={['#8A2387', '#E94057', '#F27121']}
          style={styles.gradient}
        >
          <Text style={styles.miniButtonLabel}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  miniButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    width: 200,
    height: 40,
    marginBottom: 10,
  },
  miniButtonLabel: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#fff',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 200,
    height: 40,
  },
  button: {
    flex: 1,
    width: 200,
    height: 40,
  },
});
