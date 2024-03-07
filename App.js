import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { s } from "./app.style";
import hotBg from "./assets/hot.png";
import coldBg from "./assets/cold.png";
import { Input } from "./components/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  return (
    <ImageBackground style={s.backgroundImage} source={hotBg}>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayTemperature unit={currentUnit} temperature={inputValue} />
          <Input unit={currentUnit} defaultValue={0} onChange={setInputValue} />
          <Text>Button</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
