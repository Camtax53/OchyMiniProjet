import React from "react";
import { StyleSheet, View,  Text,TouchableOpacity  } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({name,email,height,weight}) => 
{
  let feet = null;
  let inches = null;

  //permet de séparer les feet et les inches pour l'affichage
  if (height) {
    const parts = height.split("'");
    feet = parts[0];
    inches = parts[1];
  }

return (
   
  <TouchableOpacity onPress={click} >  
  <View style={ styles.itemAccepted}> 
  <View style={styles.textContainer}>
    <Text style={styles.name}>{name}</Text>
    {email && <Text style={styles.email}>{email}</Text>}
    <View style={ styles.rowContainer}> 
    {height && ( //s'affiche uniquement si la taille est renseignée
    <>
      <MaterialIcons name="straighten" size={16} color="white" />
      <Text style={styles.numbers}>{feet}</Text>
      <Text style={styles.unit}>ft</Text>
      <Text style={styles.numbers}>{inches}</Text>
      <Text style={styles.unit}>in</Text>
    </>
  )}
  
  {weight && ( //s'affiche uniquement si le poids est renseigné
    <>
      <Text style={styles.email}>・</Text>
      <MaterialCommunityIcons name="weight" size={16} color="white" />
      <Text style={styles.numbers}>{weight}</Text>
      <Text style={styles.unit}>ibs</Text>
    </>
  )}
    </View>
    </View>
    
    <TouchableOpacity onPress={click}  style={styles.iconContainer}>
    <MaterialIcons name="chevron-right" size={30} color="white" />
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
        backgroundColor:  'rgba(255, 255, 255, 0.1)', //noir avec transparence de 10%
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 10,
      },
      textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      name: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        fontFamily: "Roboto",
      },
      email: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 15,
        fontFamily: "Roboto",
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      numbers: {
        color: 'rgba(255,255,255,1)',
        fontSize: 15,
        fontFamily: "Roboto",
        paddingLeft: 2,
      },
      unit: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        fontFamily: "Roboto",
        paddingLeft: 2,
        marginBottom: -5,
      },
      iconContainer: {
        position: 'absolute',
        right: 10, 
      },
      
    });

    const click = () => {
        console.log("Click !");
      };

export default Item;