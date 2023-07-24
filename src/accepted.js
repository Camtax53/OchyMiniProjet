import React, {useEffect, useState, useCallback, useRef} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Email from './components/email.js';
import Weight from "./components/weight.js";
import Height from "./components/height.js";

const invert = require('invert-color');

//Affichage des athlètes acceptés
const ItemAccepted = ({ name, email, height, weight }) => {
  const isFirstRender = useRef(true);
  const [buttonColor, setButtonColor] = useState('rgba(255, 255, 255, 0.1)');
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {
    // Saute le useEffect lors du premier rendu
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Exécute le code ici pour les rendus ultérieurs
    
      setTextColor(invert(buttonColor));
    
  }, [buttonColor]);

  const changeColor = useCallback(async () => {
    try {
      let newColor = "";
  
      while (!newColor || newColor.trim() === "") {
        const timestamp = new Date().getTime();
        console.log(timestamp);
        let resp = await fetch(`https://www.colr.org/json/color/random?timestamp=${timestamp}`);
  
        if (!resp.ok) {
          throw new Error('Échec de l appel a l API');
        }
  
        let respJson = await resp.json();
        newColor = respJson.colors[0].hex;
      }
  
      setButtonColor(`#${newColor}`);
      console.log(`#${newColor}`);
    } catch (error) {
      console.error('Erreur lors de la requête fetch :', error.message);
    }
  }, []);
  
  return (

    <TouchableOpacity onPress={changeColor} >
      <View style={styles.itemAccepted} backgroundColor= {buttonColor}>
        <View style={styles.textContainer}>
          <Text style={[styles.name, {color: textColor}]} >{name}</Text>
          <Email email={email} textColor={textColor} />
          <View style={[styles.rowContainer, {color:textColor}]}>
            <Height height={height} textColor={textColor}/>
            <Weight weight={weight} textColor={textColor} />
          </View>
        </View>

        <TouchableOpacity onPress={changeColor} style={styles.iconContainer}>
          <MaterialIcons name="chevron-right" size={30} color= {textColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemAccepted: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  email: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
  },

});


export default ItemAccepted;