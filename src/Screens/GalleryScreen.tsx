// GalleryScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header'
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';


type Props = {
  navigation: NavigationProp<any>; // Replace 'any' with the appropriate navigation type
};

const GalleryScreen: React.FC<Props> = ({ navigation }) => {
  const [artworks, setArtworks] = useState();
  const [error, setError] = useState('');


  // if there is any error in data fetching
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }


  const API_BASE_URL = 'https://www.rijksmuseum.nl/api/en';
  const API_KEY = 'QHrIvcLh'; // Obtain your API key from Rijksmuseum API website

  // API call
  const getData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/collection`, {
        params: {
          key: API_KEY,
          format: 'json',
          type: 'painting',
        },
      });
      setArtworks(response.data.artObjects);
    } catch (error) {
      setError('Somthing went wrong')
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View>
      <Text>heyy</Text>
    </View>
    <View style={styles.wrapperClass}>
      <Header title="Art Gallery" />
      <View style={styles.container}>
        <Text style={styles.containerText}>Our Art</Text>
        <View style={styles.card}>
          <FlatList
            data={artworks}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.wrapperClass}
                onPress={() => navigation.navigate('ArtworkDetail', { artworkId: item })}>
                <View style={styles.imageWrapper} >
                  <ImageBackground source={{ uri: item.webImage.url }} style={styles.image} >
                    <View style={styles.textWrapper}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  )
}

//css
const styles = StyleSheet.create({
  wrapperClass : {
    flex:1
  },
  container: {
    flex: 1,
    marginTop: -100,
    backgroundColor: 'white',
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  containerText: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
    marginStart: 23,
    color: 'black'
  },
  card: {
    flex: 1,
    marginTop: '3%'
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    padding: 5,
    alignContent: 'center',
    justifyContent : "flex-end",
  },
  title: {
    padding: 2,
    margin: 2,
    color: 'white',
    textAlignVertical: 'bottom',
  }
})
export default GalleryScreen;
