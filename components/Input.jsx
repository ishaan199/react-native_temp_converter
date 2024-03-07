import { Text, TextInput, View } from 'react-native';
import { s } from './input.style';
export const Input = ({defaultValue, onChange, unit}) => {
    return(
        <View style={s.inputView}>
            <TextInput style={s.input} maxLength={3} defaultValue={defaultValue.toString()} onChangeText={(text)=>{
                onChange(text)
            }} placeholder='Type your Temperature'/>
            <Text style={s.unit}>{unit}</Text>
        </View>
    )
}