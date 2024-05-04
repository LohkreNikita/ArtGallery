  import React, { useEffect, useState } from 'react';
import { View ,Text, Image, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';



const App = () => {

  const [data, setData] = useState();

  const API_BASE_URL = 'https://www.rijksmuseum.nl/api/en';
  const API_KEY = 'QHrIvcLh'; // Obtain your API key from Rijksmuseum API website

  const getData = async() => {
    try {
      const response = await axios.get(`${API_BASE_URL}/collection`, {
        params: {
          key: API_KEY,
          format: 'json',
          type: 'painting', // Optionally specify type of artwork
        },
      });
      console.log("heyyyy",response.data.artObjects)
      // return response.data.artObjects;
      setData(response.data.artObjects);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      return [];
    }
  }

  useEffect(() => {
      getData();
  }, [])

  // const renderItem = ({ item }) => (
  //   // <TouchableOpacity onPress={() => navigation.navigate('ArtworkDetail', { artwork: item })}>
  //     <View style={{ padding: 10 }}>
  //       <Image source={{ uri: item.webImage.url }} style={{ width: 150, height: 150, borderRadius: 8 }} />
  //       <Text style={{ marginTop: 8 }}>{item.title}</Text>
  //     </View>
  //   // </TouchableOpacity>
  // );

  return (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    numColumns={2}
    renderItem={ ({item})=> (
      <View style={styles.container} >
      <View style={[styles.card, styles.shadowProp]}>
        <Image source={{ uri: item.webImage.url }} style={{ width: 170, height: 150, borderRadius: 8 }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      </View>
    )}

    
  />
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    padding :5,
    backgroundColor: "#eee",
  },
  card: {
    flex: 1,
    padding: 7,
    alignContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
    height : 220,
    backgroundColor: 'white',
    // overflow: "hidden"
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image : {
    width: '100%',
    height: "auto",
  },
  title : {
    padding : 2,
    margin : 2,
    color :'black',
    // fontWeight : 'bold'
  }

})

export default App;



{/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
<View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
  <View>
    <Image
      source={{ uri: 'https://modernartgallery.co.in/cdn/shop/files/pai_826868e9-c655-462a-9402-78502f59f08d_525x280.jpg?v=1657131956' }}
      style={{
        height: 150,
        width: 350
      }}
    />
  </View>
  <View style={{ padding: 10, alignItems: 'center',justifyContent : 'center', }}>
    <Text style={{fontSize:18, color : 'black'}} >Title</Text>
    <Text style={{ color: "#777", paddingTop: 5 }}>
      Description of the image
    </Text>
  </View>
</View>
</View> */}

