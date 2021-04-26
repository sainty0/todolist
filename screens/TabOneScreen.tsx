import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Task   from '../components/Task';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* To Do List */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* To Do Task Items */}
        <View style={styles.items}>
          <Task text='hello there'/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    backgroundColor: 'transparent',
    marginTop: 30,
  },
});
