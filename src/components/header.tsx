import { Image, View } from "react-native";

export default function Header() {
  return (
    <View className="h-60 bg-gray-700 items-center justify-center">
      <Image source={require("@/assets/logo.png")} className="w-44 h-44" style={{ resizeMode: "contain" }} />
    </View>
  );
}
