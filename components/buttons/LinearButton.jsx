import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function LinearButton({ buttonText }) {
  return (
      <LinearGradient
        colors={['#CB379F', '#8C61EB']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
});
