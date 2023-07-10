import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView, Text, FlatList, TouchableOpacity } from "react-native";
import { AppBar } from "@react-native-material/core";
import {
  useFonts,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";



import Item from './accepted.js';
import ItemPending from './pending.js';
const DATA = require('./DummyData.json');



const App = () => {
  //importation de la police
  let [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }


  return (
    <SafeAreaView style={styles.AndroidSafeArea}> 
      <AppBar
        title="Athletes"
        titleStyle={styles.appBarTitle}
        color="black"
        tintColor="white" />
      <FlatList
        data={DATA.users}
        renderItem={({ item }) => item.status === 'pending' ? <ItemPending name={item.name} email={item.mail} /> : <Item name={item.name} email={item.mail} height={item.height} weight={item.weight} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>

  );
};



const styles = StyleSheet.create({
  AndroidSafeArea: { //permet de ne pas avoir des elements qui seront cachés par la barre de status
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  appBarTitle: {
    fontSize: 40,
    fontFamily: "SpaceGrotesk_700Bold",
    fontWeight: "bold",
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontFamily: "SpaceGrotesk_400Regular",
  },

});



export default App;
