import { Image, View, ImageBackground, Text, TouchableOpacity, useWindowDimensions } from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";
import { MotiView } from "moti";

type Props = {
  image?: string
  onChangeAvatar?: () => void
  onExpandQRCode?: () => void
}
export function Credential({ onChangeAvatar, image, onExpandQRCode }: Props) {
  const { height } = useWindowDimensions()
  return (
    <MotiView
      className="w-full self-stretch items-center"
      from={{
        opacity: 1,
        translateY: -height,
        // rotateZ: "50deg",
        rotateY: "30deg",
        // rotateX: "30deg"
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        // rotateZ: "0deg",
        rotateY: "0deg",
        // rotateX: "0deg"
      }}
      transition={{
        // duration: 5000,
        type: "spring",
        rotateZ: {
          damping: 15,
          mass: 3
        }
      }}
    >
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">123</Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {image ?
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image source={{ uri: image }} className="w-36 h-36 rounded-full -mt-24" />
          </TouchableOpacity>
          :
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <View className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center">
              <Feather name="camera" color={colors.green[400]} size={32} />
            </View>
          </TouchableOpacity>
        }

        <Text className="font-bold text-2xl text-zinc-50 mt-4">Alessandro Lima</Text>
        <Text className="font-regular text-base text-zinc-300 mb-4">AlessandroLima@gmail</Text>

        <QRCode value="test" size={120} />

        <View className="mt-4" />
        <TouchableOpacity activeOpacity={0.7} onPress={onExpandQRCode}>
          <Text className="font-bold text-orange-500 text-sm">Amplicar QRCode</Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  )
}