import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define a type for your stack navigator's parameter list
export type RootStackParamList = {
  GalleryScreen: {}; // Screen with no params
  ArtworkDetailScreen: { artworkId?: any }; // Screen with a param named 'artworkId' of type string
};

// Define a type to extract route props for a specific screen
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, Screen>;
  route: RouteProp<RootStackParamList, Screen>;
};
