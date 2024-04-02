import { colors } from "@/styles/colors"
import QRCodeSvg from "react-native-qrcode-svg"

type props = {
  value: string
  size: number
}
export function QRCode({ size, value }: props) {
  return <QRCodeSvg value={value} size={size} color={colors.white} backgroundColor="transparent" />
}