import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import WeatherInfo from '../components/weather-info';

const Weather: React.FC = () => {
  const tw = useTailwind();

  const [input, setInput] = useState<any>();
  const [location, setLocation] = useState<any>();

  const navigation = useNavigation<any>();

  const onSubmit = () => {
    if (input !== '') {
      setLocation(input);
    }
  };

  const navigateToWelcomeScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={tw('flex-1 max-w-sm justify-center items-center p-1')}>
      <Text style={tw('text-2xl font-bold mb-4')}>Weather Search</Text>
      <TextInput
        style={tw('bg-white rounded-lg px-4 py-2 w-1/2 mb-4')}
        placeholder="Enter a location"
        value={input}
        onChangeText={setInput}
      />
      <Pressable
        style={tw('bg-blue-500 rounded-lg px-4 py-2')}
        onPress={onSubmit}
        disabled={input === ''}>
        <Text style={tw('text-white font-bold')}>Get Weather</Text>
      </Pressable>
      {location && <WeatherInfo location={location} />}
      <Pressable style={tw('mt-8')} onPress={navigateToWelcomeScreen}>
        <Text style={tw('text-blue-500 font-bold')}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export { Weather };
export default Weather;
