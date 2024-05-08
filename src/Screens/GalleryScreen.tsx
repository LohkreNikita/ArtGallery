import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Header from '../components/Header';
import {NavigationProp} from '@react-navigation/native';
import {fetchArtworks} from '../apiService';

type Artwork = {
  id: string;
  title: string;
  objectNumber: string;
  webImage: any;
};

type Props = {
  navigation: NavigationProp<any>;
};

const GalleryScreen: React.FC<Props> = ({navigation}) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [error, setError] = useState<string>('');

  // API call
  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const fetchedArtworks = await fetchArtworks();
        setArtworks(fetchedArtworks);
      } catch (error) {
        setError('Something went wrong');
      }
    };
    loadArtworks();
  }, []);

  // if there is any error in data fetching
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  const renderItem = ({item}: {item: Artwork}) => (
    <TouchableOpacity
      style={styles.artworkContainer}
      onPress={() =>
        navigation.navigate('ArtworkDetail', {
          artworkId: item,
        })
      }>
      <View style={styles.imageWrapper}>
        <ImageBackground source={{uri: item.webImage.url}} style={styles.image}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapperClass}>
      <Header title="Art Gallery" />
      <View style={styles.container}>
        <Text style={styles.containerText}>Our Art</Text>
        <View style={styles.card}>
          <FlatList
            data={artworks}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
};

//css
const styles = StyleSheet.create({
  wrapperClass: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: -100,
    backgroundColor: 'white',
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  artworkContainer: {
    flex: 1,
    margin: 5,
  },
  containerText: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
    marginStart: 23,
    color: 'black',
  },
  card: {
    flex: 1,
    marginTop: '3%',
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    padding: 2,
    margin: 2,
    color: 'white',
    textAlignVertical: 'bottom',
  },
});
export default GalleryScreen;
