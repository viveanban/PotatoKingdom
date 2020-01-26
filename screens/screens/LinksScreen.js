import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ACTIVITYDATA = [
  {
    id: '1',
    title: 'Jamming',
    time: '12',
  },
  {
    id: '2',
    title: 'Running',
    time: '15',
  },
  {
    id: '3',
    title: 'Running',
    time: '20',
  },
  {
    id: '4',
    title: 'Running',
    time: '20',
  },
  {
    id: '5',
    title: 'Running',
    time: '20',
  },
  {
    id: '6',
    title: 'Running',
    time: '20',
  },
];

const BADGEDATA = [
  {
    id: '1',
    url: 'potato_badge',
  },
]

function Item({ title, time }) {
  return (
    <View style={styles.item}>
      <Text style={styles.historyTitle}>{title}</Text>
      <Text style={styles.timeTitle}>{time} minutes</Text>
    </View>
  );
}

function Badge({ imgAddress }) {
  var test = `require(../assets/images/${imgAddress})`;
  console.log(test);
  return (
    <View style={styles.badgeItem}>
      <Image
        source={require('../assets/images/potato_badge.png')}
        style={{width: 80, height: 80}}
      />
      <Image
        source={require('../assets/images/mashed_badge.png')}
        style={{width: 80, height: 80}}
      />
      <Image
        source={require('../assets/images/fries_badge.png')}
        style={{width: 80, height: 80}}
      />
    </View>
  );
}

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/images/user_avatar.png')}
          style={{width: 90, height: 90, borderRadius: 90, marginRight: 20}}
        />
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
          <Text style={styles.username}>Badges</Text>
          <FlatList
            data={BADGEDATA} //user level
            renderItem={({ item }) => <Badge imgAddress={item.url} />}
            keyExtractor={item => item.id}
            horizontal={true}
            // horizontal={true}
          />
      </View>

      <View style={styles.activityLog}>
        <Text style={styles.username}>Activity Log</Text>
        <FlatList
          data={ACTIVITYDATA}
          renderItem={({ item }) => <Item title={item.title} time={item.time} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
    padding: 20,
    justifyContent: 'space-evenly',
  },

  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0.8,
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
    flex: 1,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,
    padding: 15,
    marginTop: 15,
  },

  activityLog: {
    backgroundColor: 'white',
    flex: 2,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,
    padding: 15,
    marginTop: 15,
  },

  historyTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F6CB00',
    letterSpacing: 1,
  },

  timeTitle: {
    color: '#bfbfbf',
    letterSpacing: 0.5,
  },

  item: {
    marginTop: 12,
  },

  badgeItem: {
    marginTop: 12,
    flexDirection: 'row',
  }
});
