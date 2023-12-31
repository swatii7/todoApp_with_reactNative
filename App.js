import { Keyboard, StyleSheet, Text, View  } from 'react-native';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

export default function App() {

  const arr =['Clean Kitchen', 'Make Breakfast']

  const [todoList, setTodoList] = useState(arr)
  const [task, setTask] = useState('')

const addTaskHandler=()=>{
 console.log(task)
}

  return (
    <View style={styles.container}>
    {/* Today's Tasks */}
   <View style={styles.tasksWrapper}>
   <Text style={styles.sectionTitle}>Today's tasks</Text>
<View style = {styles.items}>

  <Tasks todoList={todoList} />

</View>
   </View>
   <View>
 
   </View>
   <AddTask onChange= {text => setTask(text)} value= {task} onPress= {()=> addTaskHandler()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    borderRadius: 25
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 30
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: 'Roboto'
  },
  items: {
    marginTop: 30
  }
});

