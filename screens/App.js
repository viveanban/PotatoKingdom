import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        { <Image
          source={require('./assets/user_avatar.png')}
          style={{width: 90, height: 90, borderRadius: 90, marginRight: 20}}
        /> }
        <View>
          <Text style={styles.username}>John Smith</Text>
          <Text style={styles.level}>John Smith</Text>
          <Text style={styles.points}>1002 pts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
    paddingLeft: 30,
    paddingTop: 50,
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

  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
