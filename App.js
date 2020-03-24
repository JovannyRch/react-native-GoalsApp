/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const btnHandler = newGoal => {
    if (true) {
      setGoals([...goals, {id: goals.length.toString(), value: newGoal}]);
      setIsAddMode(false);
    }
  };

  const deleteHandler = idItem => {
    console.log('Id Item recibido', idItem);
    let newGoals = goals.filter(g => g.id !== idItem);
    console.log(newGoals);
    setGoals(newGoals);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btnNuevaMeta}
            onPress={() => setIsAddMode(true)}
            title="Nueva meta"
          />
        </View>
        <GoalInput visible={isAddMode} btnHandler={btnHandler} />
        <View style={styles.centerView}>
          <TouchableOpacity
            style={styles.btnDanger}
            onPress={() => setGoals([])}>
            <Text style={{color: 'white'}}> Limpiar lista </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={goals}
          renderItem={itemData => (
            <GoalItem
              onDelete={deleteHandler}
              title={itemData.item.value}
              id={itemData.item.id}
            />
          )}
        />
        {/*  <ScrollView>
          {goals.map(g => (
            <Text style={styles.listItem} key={g}>
              {g}
            </Text>
          ))}
        </ScrollView> */}
        {/* <View>
          <Text style={{textAlign: 'center'}}>{counter}</Text>
          <Button
            title="Press me"
            onPress={() => {
              setCounter(counter + 1);
            }}
          />
        </View> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btnDanger: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    width: '60%',
  },
  centerView: {
    alignItems: 'center',
  },
  btnNuevaMeta: {
    margin: 10,
  },
  btnContainer: {
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default App;
