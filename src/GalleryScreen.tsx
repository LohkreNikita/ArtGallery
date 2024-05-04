// GalleryScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { fetchArtworks } from './api';

const GalleryScreen = () => {
//   const [artworks, setArtworks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadArtworks = async () => {
//       try {
//         const artworksData = await fetchArtworks();
//         setArtworks(artworksData);
//         setLoading(false);
//       } catch (error) {
//         // setError("Failed to load artworks. Please try again.");
//         setLoading(false);
//       }
//     };
//     loadArtworks();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('ArtworkDetail', { artwork: item })}>
//       <View style={{ padding: 10 }}>
//         <Image source={{ uri: item.webImage.url }} style={{ width: 150, height: 150, borderRadius: 8 }} />
//         <Text style={{ marginTop: 8 }}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

  return (
    // <FlatList
    //   data={artworks}
    //   renderItem={renderItem}
    //   keyExtractor={(item) => item.id}
    //   numColumns={2}
    //   contentContainerStyle={{ padding: 10 }}
    // />
     <View style={{ padding: 10 }}>
       {/* <Image source={{ uri: 'https://modernartgallery.co.in/cdn/shop/files/pai_826868e9-c655-462a-9402-78502f59f08d_525x280.jpg?v=1657131956' }} style={{ width: 150, height: 150, borderRadius: 8 }} /> */}
       <Text style={{ marginTop: 8 }}>Nikita</Text>
      </View>
  );
};

export default GalleryScreen;
