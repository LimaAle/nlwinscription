import { Input } from "@/components/input";
import { Alert, Image, StatusBar, View } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleRegister() {
    if(!name.trim() || !email.trim()){
      return Alert.alert("Atenção","Preencha todos os campos!")
    }
    router.push("/ticket")
  }
  return (
    <View className="bg-green-500 flex-1 justify-center items-center p-8">
      <StatusBar barStyle="light-content" />
      <Image source={require("@/assets/logo.png")} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Nome completo"
            onChangeText={setName} />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail} />
        </Input>
        <Button title="Realizar inscrição" onPress={handleRegister} />

        <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}