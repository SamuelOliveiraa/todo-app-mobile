import Counter from "./counter";
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { taskStorage, TaskStorageProps } from "@/storage/taskStorage";

export default function InfoTasks() {
  const [created, setCreated] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [allTasks, setAllTasks] = useState<TaskStorageProps[]>([]);

  async function handleCreatedAndCompleted() {
    const response = await taskStorage.get();

    setAllTasks(response);

    const checkedCount = allTasks.filter(task => task.checked).length;

    setCompleted(checkedCount);

    setCreated(allTasks.length);
  }

  useEffect(() => {
    handleCreatedAndCompleted();
  }, [allTasks]);

  return (
    <View className="w-full items-center justify-between flex-row">
      <View className="gap-4 flex-row">
        <Text className="text-blue-400 text-lg font-bold">Criadas</Text>
        <Counter value={created} />
      </View>
      <View className="gap-4 flex-row">
        <Text className="text-purple-300 text-lg font-bold">Concluídas</Text>
        <Counter value={completed} />
      </View>
    </View>
  );
}
