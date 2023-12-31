// app.js
import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView, FlatList, View } from "react-native";
import { useCustomFonts } from './assets/font.js';
import ItemAccepted from './src/accepted.js';
import ItemPending from './src/pending.js';
import CustomAppBar from "./src/components/appBar.js";

const DATA = require('./DummyData.json');

export const ColorContext = createContext(null);

const App = () => {
  const [resetColor, setResetColor] = useState(false);
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <ColorContext.Provider value={{ resetColor, setResetColor }}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <CustomAppBar />
        <FlatList
          data={DATA.users}
          renderItem={({ item }) => item.status === 'pending' ? <ItemPending name={item.name} email={item.mail} /> : <ItemAccepted name={item.name} email={item.mail} height={item.height} weight={item.weight} />}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    </ColorContext.Provider>

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