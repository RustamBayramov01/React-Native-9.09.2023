import React from 'react';
import {StyleSheet, Text, TouchableHighlight, Image, View} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>

      <TouchableHighlight style={styles.button} onPress={() => {alert("TouchableHighlight Text")}}>
        <Text style={styles.text} >PRESS HERE</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.image} onPress={() => {alert("TouchableHighlight Image")}}>
        <Image style={{width:300, height:300}} source={{
            uri:'https://enguzelsoz.net/wp-content/uploads/2019/10/ramiz-dayı-sözleri.jpg'
        }}/>
      </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 200
  },
  button: {
    marginTop: 50,
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