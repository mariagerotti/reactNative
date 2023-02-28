import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/Header';

export default function App() { 
  const tasks = [
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5',
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5'
  ];

  // render() {
    return (
      <View style={styles.container}>
        <Header />
        <View>
          <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
        </View>      
      </View>
    );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});