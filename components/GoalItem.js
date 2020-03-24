import React from 'react';

import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  const {title, onDelete, id} = props;
  return (
    <>
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onDelete(id)}>
          <Text style={styles.listItem}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 30,
  },
});
export default GoalItem;
