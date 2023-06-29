import React from 'react'
import { View , FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Tasks(props) {
  return (
    <>

<View style={styles.container}>
      <FlatList
        data={props.todoList}
        renderItem={({item}) =>    <View style= {styles.item} >
  
  <View style= {styles.itemLeft}>
      <TouchableOpacity style= {styles.square}></TouchableOpacity>
          <Text style= {styles.itemText}>{item}</Text>
  </View>
      <View  style= {styles.circular}></View>
  </View>}
      />
    </View>

    </>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF666',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15   
    },
    itemText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#1a1a1a',
        padding: 19,
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55BCF6',
        borderStyle: 'solid',
    },

});
