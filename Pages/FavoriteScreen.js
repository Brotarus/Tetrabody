// Favorite Screen
import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Placeholder data to put into the scrolling feed once the database ready for integration
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Fave',
    desc: 'First Desc',
    icon: 'flight-takeoff'
  },
  {
    id: 'a',
    title: 'Second Fave',
    desc: 'Second Desc',
    icon: 'flight-takeoff'
  },
  
];

export default class FavoriteScreen extends Component {
  renderItem = ({ item }) => {
    return (
      //Placeholder for a video to select
      <View style={{flexDirection: 'row', height: 100, width: '98%', backgroundColor: '#1c1c1c', margin: 10
      , justifyContent: 'center', textAlign: 'center', borderRadius: 10
      }}>
        <View style={ styles.thumbnail }>
          <Icon
            name={'heart'}
            size={50}
            style={{color: '#FFFFFF'}}
          />
        </View>
        <View style={ styles.videoTextArea}>
          <Text style={ styles.videoTitle }>{item.title}</Text>
          <Text style={ styles.videoTitle }>{item.desc}</Text>
        </View>
      </View>
  
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.title }>TetraBody</Text>

        <FlatList
        style={{ width: '100%', marginRight: 10}}
        data={DATA}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        />
        
        
      
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4d4d',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 30,
    color: '#00cccc',
    marginTop: 65,
  },
  item: {
    backgroundColor: '#333333',
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 60,
  },
  scroll:{
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    //overflow-y: scroll,
  },
  thumbnail:{
    flex: 25,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#111111',
    textAlign: 'center',
    justifyContent: 'center',
  },
  videoTitle:{
    textAlign: 'center',
    color: '#555555',
  },
  videoTextArea:{
    flex: 75,
    width: '90%',
    justifyContent: 'center',
    textAlign: 'center',
  }
});