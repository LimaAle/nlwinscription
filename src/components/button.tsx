import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean

}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      className=""
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <View className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg">
        {!isLoading ? <Text className="text-green-500 text-base font-bold uppercase">{title}</Text> : <ActivityIndicator />}
      </View>
    </TouchableOpacity>
  )
}