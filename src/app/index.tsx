import { View } from "react-native";
import Input from "@/components/input";
import Header from "@/components/header";
import TasksContainer from "@/components/tasksContainer";

export default function App() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />
      <Input />
      <TasksContainer />
    </View>
  );
}
