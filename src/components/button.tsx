import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";

type Props = PressableProps;

export default function Button({ ...rest }: Props) {
  return (
    <Pressable
      className="w-16 h-16 rounded-lg bg-blue-900 items-center justify-center"
      {...rest}
    >
      <Ionicons name="add-circle-outline" size={24} color={colors.gray[100]} />
    </Pressable>
  );
}
