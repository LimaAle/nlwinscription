import { Text, View } from "react-native"

type Props = {
  title: string
}
function Header({ title }: Props) {
  return (
    <View className="w-full h-28 items-end bg-black/20 px-8 pb-4 border-b border-white/10 flex-row">
      <Text className="flex-1 text-white font-medium text-lg text-center">{title}</Text>
    </View>
  )
}

export { Header }