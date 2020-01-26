import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        { <Image
          source={require('../assets/images/user_avatar.png')}
          style={{width: 90, height: 90, borderRadius: 90, marginRight: 20}}
        /> }
        <View>
          <Text style={styles.username}>John Smith</Text>
          <Text style={styles.level}>John Smith</Text>
          <Text style={styles.points}>1002 pts</Text>
        </View>
      </View>

      <TouchableOpacity>
        <LinearGradient colors={['#F6CB00', '#EF7F4D']} start={[0, 1]} end={[1, 0]} style={styles.addActivity}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', letterSpacing: 5}}>+ ADD ACTIVITY</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.badges}>

      </View>

      <View style={styles.badges}>

      </View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
    padding: 20,
    justifyContent: 'space-between',
  },

  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },

  username: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#707070',
    letterSpacing: 1,
  },

  level: {
    fontSize: 16,
    color: '#707070',
    letterSpacing: 0.5,
  },

  points: {
    fontSize: 18,
    color: '#F6CB00',
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },

  addActivity: {
    width: '100%',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },

  badges: {
    backgroundColor: 'white',
    flex: 2,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,
  },
});
