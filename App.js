import { StatusBar } from "expo-status-bar";
import { ButtonConvert } from "./components/buttonConvert/ButtonConvert";
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
import { useEffect, useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import {
  UNIT,
  convertTemperature,
  getOppositeUnit,
  isIceTemp,
} from "./utils/temperature";
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(coldBg);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    if (isIceTemp(inputValue, currentUnit)) {
      setCurrentBackground(coldBg);
    } else {
      setCurrentBackground(hotBg);
    }
  }, [inputValue, currentUnit]);
  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperature(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <ImageBackground style={s.backgroundImage} source={currentBackground}>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayTemperature
            unit={oppositeUnit}
            temperature={getConvertedTemperature()}
          />
          <Input unit={currentUnit} defaultValue={0} onChange={setInputValue} />
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
