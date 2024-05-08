// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GalleryScreen from './src/Screens/GalleryScreen';
import ArtworkDetailScreen from './src/Screens/ArtworkDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="ArtworkDetail" component={ArtworkDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
