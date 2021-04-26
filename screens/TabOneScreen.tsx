import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Keyboard } from 'react-native';

import { Text, View } from '../components/Themed';
import Task   from '../components/Task';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  const [task, setTask] = useState<any | null>(null);
  const [taskItems, setTaskItems] = useState([] as any);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index:number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* To Do List */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* To Do Task Items */}
        <View style={styles.items}>
          {
            taskItems.map((item:string, index:number) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
                )
            })
          }
        </View>

      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding":"height"}
        style={styles.writeTaskWrapper}
      > 

        <TextInput style={styles.input} placeholder={'Write a task.'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor:'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addText:{},
});
