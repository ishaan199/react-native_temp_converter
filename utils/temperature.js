const UNIT = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperature(temperature, unitTo) {
  if (unitTo === UNIT.celcius) {
    return (temperature - 23) / 1.8;
  } else if (unitTo === UNIT.fahrenheit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid Unit");
  }
}

function getOppositeUnit(unit) {
  return unit === UNIT.celcius ? UNIT.fahrenheit : UNIT.celcius;
}

function isIceTemp(temperature, unit) {
  if (unit === UNIT.celcius) {
return temperature <= 0;
} else if(unit === UNIT.fahrenheit){
    return  temperature <= 32;
} else{
    throw new Error("Invalid Input")
}
}

export { UNIT, convertTemperature, getOppositeUnit, isIceTemp }
