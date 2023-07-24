import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Height = ({ height, textColor }) => {
let feet = null;
  let inches = null;

  //permet de séparer les feet et les inches pour l'affichage
  if (height) {
    const parts = height.split("'");
    feet = parts[0];
    inches = parts[1];
  }
    return (
        height && ( //s'affiche uniquement si la taille est renseignée
              <>
                <MaterialIcons name="straighten" size={16} color= {textColor} style={styles.ruler} />
                <Text style={[styles.numbers, { color: textColor }]}>{feet}</Text>
                <Text style={[styles.unit, { color: textColor }]}>ft</Text>
                <Text style={[styles.numbers, { color: textColor }]}>{inches}</Text>
                <Text style={[styles.unit, { color: textColor }]}>in</Text>
              </>
            )
        )
    
}

const styles = StyleSheet.create({
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
    },
    ruler: {
        transform: [{ rotate: '130deg' }],
        paddingLeft: 2,
    },
});

export default Height;
