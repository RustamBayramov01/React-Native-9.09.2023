import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native';


 

const Movies = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
 
    const getMovies = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          setData(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
    useEffect(() => {
        getMovies();
      }, []);

    return (

        <SafeAreaView>

        {isLoading ? (
            <ActivityIndicator />
        ) : (
            
            <ScrollView>

            <SafeAreaView  style={styles.container}> 

            {isLoading ? (
                <ActivityIndicator />
            ) : (
            <FlatList
            
                data={data}
                keyExtractor={({item}) => item?.id}
                renderItem={({item}) => <Text> {item.title}, {item.releaseYear} </Text>}

            />
            )}


            </SafeAreaView>

        </ScrollView>
        
        )}

    </SafeAreaView>
        
       

    )
}

const styles = StyleSheet.create({
  container:{
      flex: 1, 
      padding: 24
    }
})


export default Movies