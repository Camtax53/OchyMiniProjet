import React from "react";
import { StyleSheet, View, Platform, StatusBar, SafeAreaView, Text, FlatList,TouchableOpacity  } from "react-native";
import { AppBar, ListItem } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';


const DATA = require('./DummyData.json');

const Item = ({name,email}) => (

  <View style={ styles.itemAccepted}> 
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{email}</Text>
    <TouchableOpacity onPress={handleIconClick} style={styles.iconContainer}>
    <Icon name="straighten" size={30} color="white" style={styles.icon}/>
      </TouchableOpacity>
  </View>
);

const ItemPending = ({name,email}) => (

  <View style={styles.itemPending }>
    <View style={styles.textContainer}>
      <Text style={pending.name}>{name}</Text>
      <Text style={pending.email}>{email}</Text>
    </View>
    <TouchableOpacity onPress={handleIconClick} style={styles.iconContainer}>
      <Icon name="chevron-right" size={30} color="white" />
    </TouchableOpacity>
  </View>
);

const handleIconClick = () => {
  console.log("Click !");
};

const App = () => (
  <SafeAreaView style={styles.AndroidSafeArea}>
      
    <AppBar
    title="Athletes"
    titleStyle={styles.appBarTitle}
    color="black"
    tintColor="white" />
    <FlatList
        data={DATA.users}
        renderItem={({item}) => item.status === 'pending'? <ItemPending name={item.name} email={item.mail}  /> : <Item name={item.name} email={item.mail} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>

);


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

  itemAccepted: {
    
    backgroundColor:  'rgba(255, 255, 255, 0.1)', //noir avec transparence de 10%
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  itemPending: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:  'rgba(206,101,255,0.2)', 
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  icon: {
    transform: [{ rotate: '150deg' }],
    
  },
  iconContainer: {
    position: 'absolute',
    right: 10, 
  },
  iconContainer2: {
    position: 'absolute',
    right: 200, 
  },
  
    
});

const pending = StyleSheet.create({
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
});

export default App;
