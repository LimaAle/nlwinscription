import { Input } from "@/components/input";
import { Image, StatusBar, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="bg-green-500 flex-1 justify-center items-center p-8">
      <StatusBar barStyle="light-content" />
      <Image source={require("@/assets/logo.png")} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>
        <Button title="Acessar credencial" />

        <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8"> Ainda näo possui ingresso?</Link>
      </View>
    </View>
  )
}