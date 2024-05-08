import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../Navigation/NavigationTypes';
import {fetchArtworkDetails} from '../apiService';

type ArtworkDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ArtworkDetailScreen'>;
};

const ArtworkDetailScreen: React.FC<ArtworkDetailScreenProps> = ({route}) => {
  const {artworkId} = route.params;
  const objNo = artworkId.objectNumber;
  const [desc, setDesc] = useState([]);

  // API call for getting Description of Image
  useEffect(() => {
    const getData = async () => {
      try {
        const details = await fetchArtworkDetails(objNo);
        setDesc(details.artObject.description);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };
    getData();
  }, [artworkId, objNo]);

  return (
    <View style={styles.container}>
      <Header title="Details of Art" />
      <View style={styles.container}>
        <View style={styles.imagewrapper}>
          <Image source={{uri: artworkId.webImage.url}} style={styles.image} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{artworkId.title}</Text>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagewrapper: {
    alignItems: 'center',
    marginTop: -100,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.3,
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    padding: 5,
  },
  descText: {
    flex: 1,
    color: 'black',
    marginTop: '5%',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '300',
    lineHeight: 20,
  },
  card: {
    flex: 1,
    marginTop: '3%',
    alignItems: 'center',
  },
});

export default ArtworkDetailScreen;
