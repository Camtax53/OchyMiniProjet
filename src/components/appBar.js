import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const CustomAppBar = ({}) => {

    const click = () => {
        };

        return (
            <View style={styles.appBar}>
              <Text style={styles.appBarTitle}>{"Athletes"}</Text>
              <TouchableOpacity onPress={click} style={styles.button}>
                <MaterialIcons name="format-color-reset" color={"black"} size={20}/>
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

    