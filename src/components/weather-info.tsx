import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {fetchWeather} from '../api/get-weather';

const WeatherInfo: React.FC<any> = ({location}) => {
  const tw = useTailwind();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getWeather = async () => {
      const results = await fetchWeather(location);
      setData(results);
    };
    getWeather();
  });
  return (
    <View style={tw('justify-center items-center p-1')}>
      <View style={tw('mt-1')}>
        <Text style={tw('text-lg font-bold')}>Location: {data.name}</Text>
        <Text style={tw('text-lg')}>
          Temperature: {KtoF(data.main.temp).toFixed(0)}
        </Text>
        <Text style={tw('text-lg')}>
          Condition: {data.weather?.[0].description}
        </Text>
      </View>
    </View>
  );
};

export function KtoF(tempKevlin: number) {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

export default WeatherInfo;
