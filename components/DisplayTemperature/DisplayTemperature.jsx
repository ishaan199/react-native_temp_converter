import { Text } from "react-native"
import { s } from './diplayTemperature.style';
export const DisplayTemperature=({temperature,unit})=>{
    return <Text style={s.tempText}>{temperature} {unit}</Text>
}