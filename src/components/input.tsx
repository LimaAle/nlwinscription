import { colors } from "@/styles/colors"
import { ReactNode } from "react"
import { TextInput, TextInputProps, View } from "react-native"

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 border border-green-400 rounded-lg p-3">
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput className="flex-1 text-white text-base font-regular"
      {...rest}
      placeholderTextColor={colors.gray[200]}
    />
  )
}

Input.Field = Field


export { Input }
