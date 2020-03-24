import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
  const {btnHandler, visible, onCancel} = props;

  const [inputText, setInputText] = useState('');

  const inputHandler = value => setInputText(value);

  const addGoalHandler = () => {
    btnHandler(inputText);
    setInputText('');
  };

  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.inputText}
            placeholder="Escribe aquí un objetivo del curso"
            onChangeText={inputHandler}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Agregar"
              onPress={addGoalHandler}
              style={styles.btn}
            />
            <Button
              title="Cancelar"
              color="red"
              onPress={onCancel}
              style={styles.btn}
            />
          </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
    width: '80%',
  },
});

export default GoalInput;
