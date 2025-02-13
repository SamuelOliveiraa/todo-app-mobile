import Task from "./task";
import EmptyComponent from "./emptyComponent";
import React, { useEffect, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import { taskStorage, TaskStorageProps } from "@/storage/taskStorage";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskStorageProps[]>([]);

  async function getTasks() {
    try {
      const response = await taskStorage.get();

      if (!response) {
        setTasks([]);
        return;
      }
      setTasks(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel listar nenhuma tarefa");
    }
  }

  useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <View className="flex-1 w-full items-center">
      <FlatList
        style={{ width: "100%", marginTop: 10 }}
        data={tasks}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Task id={item.id} checked={item.checked} text={item.text} />
        )}
        ListEmptyComponent={<EmptyComponent />}
      />
    </View>
  );
}
