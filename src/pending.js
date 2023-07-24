import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Email from './components/email.js';


//Affichage des athlètes en attente
const ItemPending = ({ name, email }) => {

  return (

    <View style={styles.itemPending}>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <AntDesign name="hourglass" size={20} color="#CE65FF" />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Email email={email} />
      </View>
      <TouchableOpacity onPress={click} style={styles.iconContainer}>
        <MaterialIcons name="chevron-right" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemPending: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(206,101,255,0.2)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#CE65FF',
    fontSize: 18,
    fontFamily: "SpaceGrotesk_400Regular",
    paddingLeft: 10,
  },
  email: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
  },
});

const click = () => {
  console.log("Click !");
};


export default ItemPending;