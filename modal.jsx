import React, { useState } from 'react';
import {Text, View, Button, Modal, StyleSheet } from 'react-native';




const Books = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)
     
    return (
        
        <View style={style.container}>

            <Button  title="Press" onPress={() => setIsModalVisible(true) }  color="black"/>
    
            <Modal visible={isModalVisible}>
                <View>
                    <Text>Modal Test</Text>
                    <Button title="Close" onPress={() => setIsModalVisible(false)} color="red" />
                </View>
            </Modal>

        </View>
        
    )
}


const style = StyleSheet.create({
    container:{
        padding:60
    }
})


export default Books