import { useEffect, useReducer, useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function handleTodoReducer(state, action) {
  switch(action.type) {
    case "add": 
      return [...state, action.todo];
    case "delete": 
      return state.filter((value, index) => index != action.index);
  }
}

export default function Index() {
  const [todos, todosDispatch] = useReducer(handleTodoReducer, []);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  function addTodo() {
    todosDispatch({ todo: todo, type: "add" })
    setTodo({ title: '', description: '' });
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Title</Text>
      <TextInput 
        value={todo.title}
        onChangeText={(text) => {
          setTodo({ ...todo, title: text });
        }}
        style={{ borderWidth: 1, borderColor: '#000', marginVertical: 10 }}/>
      <Button onPress={addTodo}
        title="Add Todo"/>
      {todos?.map((todo, index) => (
        <View key={index}>
          <Text onPress={() => todosDispatch({ index: index, type: "delete" })}>Title: {todo.title}</Text>
        </View>
      ))}
    </View>
  );
}
