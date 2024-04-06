import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/qrcode";
import { MotiView } from "moti";

export default function Ticket() {
  const [image, setImage] = useState("")
  const [expandQRCode, setExpandQRCode] = useState(false)

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4]
      })

      if (result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
      Alert.alert("Atenção", "Não foi possivel selecionar a imagem.")
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha Credencial" />
      <ScrollView className="-mt-28 -z-10" contentContainerClassName="px-8 pb-8" showsVerticalScrollIndicator={false}>
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />
        <MotiView
          from={{ translateY: 0 }}
          animate={{
            translateY: 10
          }}
          transition={{
            loop:true,
            type: "timing",
            duration:500
          }}
        >
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={colors.gray[300]}
            className="self-center my-6"
          />
        </MotiView>
        <Text className="text-white font-bold text-2xl mt-4">Compartilhar credencial</Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">Mostre ao mundo que você vai participar do Unite Summit</Text>

        <Button title="Compartilhar" />

        <View className="mt-10" />
        <TouchableOpacity activeOpacity={0.7} >
          <Text className="text-base text-white font-bold text-center">Remover Ingresso</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={expandQRCode} statusBarTranslucent animationType="slide">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QRCode value="test" size={300} />

          <TouchableOpacity activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <Text className="font-bold text-orange-500 text-sm text-center mt-10">Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}