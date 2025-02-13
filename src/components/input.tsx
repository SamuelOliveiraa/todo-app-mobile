import Button from "./button";
import { useState } from "react";
import uuidv4 from "react-native-uuid";
import { View, TextInput, Alert } from "react-native";
import { taskStorage } from "@/storage/taskStorage";

export default function Input() {
  const [task, setTask] = useState("");
  async function handleAddTask() {
    try {
      if (task.trim() === "" || task.length <= 2) {
        Alert.alert(
          "Tarefa Inválida",
          "Coloque uma tarefa que seja válida, por favor."
        );
        return;
      }

      const newTask = {
        id: uuidv4.v4(),
        text: task,
        checked: false
      };

      await taskStorage.add(newTask);
      setTask("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel adicionar sua tarefa");
    }
  }
  return (
    <View className="w-full gap-2 flex-row justify-center items-center -mt-7">
      <TextInput
        className="bg-gray-400 w-3/4 rounded-lg h-16 text-xl pl-4 text-white placeholder:text-gray-300 focus:border focus:border-purple-400"
        placeholder="Adicione uma nova tarefa"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddTask}
      />
      <Button onPress={handleAddTask} />
    </View>
  );
}
