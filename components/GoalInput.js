import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
  const {btnHandler, visible} = props;

  const [inputText, setInputText] = useState('');

  const inputHandler = value => setInputText(value);
  console.log('Visible', visible);
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.viewStyle}>
          <TextInput
            placeholder="Escribe aquí un objetivo del curso"
            onChangeText={inputHandler}
          />
          <Button
            title="Agregar"
            onPress={() => btnHandler(inputText)}
            style={styles.btn}
          />
          <Button title="Cancelar" onPress={() => {}} style={styles.btn} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 30,
    marginVertical: 20,
  },
});

export default GoalInput;
