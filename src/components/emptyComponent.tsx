import { colors } from "@/styles/colors";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EmptyComponent() {
  return (
    <View className="items-center justify-center ">
      <View className="border-hairline border-gray-100 w-full mt-3" />

      <MaterialCommunityIcons
        name="clipboard-text-outline"
        size={90}
        color={colors.gray[400]}
        className="mt-10"
      />
      <Text className="text-xl text-gray-300 font-bold">
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text className="text-lg text-gray-300 ">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
