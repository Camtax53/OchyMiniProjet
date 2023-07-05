import React from "react";
import { StyleSheet, View,  Text, TouchableOpacity  } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ItemPending = ({name,email}) => (
 
    <View style={styles.itemPending }>
      <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
      <AntDesign name="hourglass" size={20} color="rgba(206,101,255,1)" />  
        <Text style={styles.name}>{name}</Text>
      </View>
      {email && <Text style={styles.email}>{email}</Text>}
      </View>
      <TouchableOpacity  onPress={click} style={styles.iconContainer}>
        <MaterialIcons name="chevron-right" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );

  const styles = StyleSheet.create({
    itemPending: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:  'rgba(206,101,255,0.2)', 
        padding: 15,
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
        marginBottom: 5,
      },
      name: {
        color: 'rgba(206,101,255,1)',
        fontSize: 18,
        fontFamily: "Roboto",
      },
      email: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 15,
        fontFamily: "Roboto",
      },
      iconContainer: {
        position: 'absolute',
        right: 10, 
      },
    });

    const click = () => {
        console.log("Click !");
      };


export default ItemPending;