// Header.tsx

import React from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';

interface HeaderProps {
  title: string;
  backButton? : boolean
}

const Header: React.FC<HeaderProps> = ({ title}) => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '27%',
    backgroundColor: '#D3AA7F',
    borderBottomColor: '#ccc',
    borderBottomEndRadius : 30,
    borderBottomLeftRadius :30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    marginTop : '13%',
    color: '#9E7B5A', 
  },
  back : {
    color : 'green'
  }
});

export default Header;
