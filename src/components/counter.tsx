import { View, Text } from "react-native";

type PropsCounter = {
  value: number;
};

export default function Counter({ value }: PropsCounter) {
  return (
    <View className="rounded-full w-8 h-8 bg-gray-400 items-center justify-center">
      <Text className="text-gray-100 font-bold">{value}</Text>
    </View>
  );
}
