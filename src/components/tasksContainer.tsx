import Tasks from "./tasks";
import { View } from "react-native";
import InfoTasks from "./infoTasks";

export default function TasksContainer() {
  return (
    <View className="flex-1 mt-10 w-full px-5 items-center justify-center">
      <InfoTasks />
      <Tasks />
    </View>
  );
}
