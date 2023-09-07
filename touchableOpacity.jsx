import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => {alert("TouchableOpacity Text")}}>
        <Text style={styles.text} >PRESS HERE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.image} onPress={() => {alert("TouchableOpacity Image")}}>
        <Image style={{width:300, height:300}} source={{
            uri:'https://enguzelsoz.net/wp-content/uploads/2019/10/ramiz-dayı-sözleri.jpg'
        }}/>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: { 
    borderRadius:20,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 25,
    height: 300,
    backgroundColor: '#DDDDDD',
    alignItems: "center", 
  }
});

export default App;