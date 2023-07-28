import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Weight = ({ weight, textColor }) => {
  return (
    weight && (
      <>
        <Text style={[styles.text, { color: textColor }]}> ・ </Text>
        <MaterialCommunityIcons name="weight" size={16} color={textColor} />
        <Text style={[styles.numbers, { color: textColor }]}>{weight}</Text>
        <Text style={[styles.unit, { color: textColor }]}>ibs</Text>
      </>
    )
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  numbers: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    fontFamily: "SpaceGrotesk_400Regular",
    paddingLeft: 2,
  },
  unit: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    fontFamily: "SpaceGrotesk_400Regular",
    paddingLeft: 2,
    marginBottom: -4,
  }
});

export default Weight;
