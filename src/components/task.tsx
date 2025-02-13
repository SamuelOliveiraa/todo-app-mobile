import Check from "./check";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Alert } from "react-native";
import { taskStorage, TaskStorageProps } from "@/storage/taskStorage";

export default function Task({ checked, text, id }: TaskStorageProps) {
  async function handleCheck() {
    try {
      taskStorage.changeChecked(id);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel marcar sua task");
    }
  }

  async function handleRemove() {
    try {
      Alert.alert(
        "Remover Tarefa",
        "Voce realmente deseja remover esta tarefa?",
        [
          {
            text: "Não",
            style: "cancel"
          },
          {
            text: "Sim",
            onPress: () => taskStorage.remove(id)
          }
        ]
      );
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel deletar esta tarefa");
    }
  }

  return (
    <View className="w-full min-h-16 bg-gray-500 flex-row items-center gap-4 rounded-lg px-4 py-2 my-2">
      <Check checked={checked} onPress={handleCheck} />
      <Text
        className={`flex-1 text-gray-100 font-inter leading-6 ${
          checked && "line-through color-gray-300"
        } `}
      >
        {text}
      </Text>
      <Ionicons
        name="trash-outline"
        color={colors.gray[300]}
        size={24}
        onPress={handleRemove}
      />
    </View>
  );
}
