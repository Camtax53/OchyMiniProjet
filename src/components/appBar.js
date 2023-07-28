import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ColorContext } from "../../App.js";

const CustomAppBar = () => {

  const { resetColor, setResetColor } = useContext(ColorContext);

  const resetButton = () => {
    setResetColor(true);
  };

  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarTitle}>{"Athletes"}</Text>
      <TouchableOpacity onPress={resetButton} style={styles.button}>
        <MaterialIcons name="format-color-reset" color={"black"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  appBarTitle: {
    fontSize: 40,
    fontFamily: "SpaceGrotesk_700Bold",
    fontWeight: "bold",
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },

});

export default CustomAppBar;

