import React from 'react';
import {Text, StyleSheet } from 'react-native';

const Email = ({ email, textColor }) => {
    return (
        email && <Text style={[styles.email, {color:textColor}]}>{email}</Text>
    );
    }

const styles = StyleSheet.create({
    email: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 15,
        fontFamily: "SpaceGrotesk_400Regular",
      },
});

export default Email;