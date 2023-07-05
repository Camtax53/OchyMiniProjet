import React from "react";
import { StyleSheet, View, Platform, StatusBar, SafeAreaView, Text, FlatList,TouchableOpacity  } from "react-native";
import { AppBar, ListItem } from "@react-native-material/core";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Item from './accepted.js';
import ItemPending from './pending.js';
const DATA = require('./DummyData.json');



const App = () => (
  <SafeAreaView style={styles.AndroidSafeArea}>
      
    <AppBar
    title="Athletes"
    titleStyle={styles.appBarTitle}
    color="black"
    tintColor="white" />
    <FlatList
        data={DATA.users}
        renderItem={({item}) => item.status === 'pending'? <ItemPending name={item.name} email={item.mail}  /> : <Item name={item.name} email={item.mail} height={item.height} weight={item.weight} />}
        keyExtractor={item => item.name}
        onPress={click}
      />
    </SafeAreaView>

);

const click = () => {
  console.log("Click !");
};


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  appBarTitle: {
    fontSize: 40, 
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  
  icon: {
    transform: [{ rotate: '150deg' }],
    
  },
    
});



export default App;
