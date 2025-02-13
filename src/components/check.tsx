import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";

type PropsCheck = PressableProps & {
  checked: boolean;
};

export default function Check({ checked, onPress }: PropsCheck) {
  return (
    <>
      <Pressable
        className={`w-7 h-7 rounded-full justify-center items-center ${
          checked ? "bg-purple-800" : 'border-2 border-blue-400'
        }`}
        onPress={onPress}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            color={colors.gray[100]}
            className="font-bold"
            size={17}
          />
        )}
      </Pressable>
    </>
  );
}
