import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import WeatherInfo from '../components/weather-info';

const Weather: React.FC = () => {
  const tw = useTailwind();

  const [input, setInput] = useState<string>('');
  const [location, setLocation] = useState<string | undefined>();

  const onSubmit = () => {
    if (input !== '') {
      setLocation(input);
    }
  };

  return (
    <View style={tw('flex-1 max-w-sm  items-center p-1')}>
      <View style={styles.container}>
        <Text style={styles.searchText}>Weather Search:</Text>
        <TextInput
          style={tw('bg-white rounded-lg-location-input px-4 py-2 w-1/3 mb-4')}
          placeholder=""
          value={input}
          onChangeText={setInput}
        />
        <Pressable
          style={tw('bg-blue-500 rounded-lg-submit px-4 py-2 mb-4')}
          onPress={onSubmit}
          disabled={input === ''}>
          <Text style={styles.submit}>SUBMIT</Text>
        </Pressable>
      </View>

      {location && <WeatherInfo location={location} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 20 },
  searchText: {
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
    marginRight: 10,
    marginTop: 10,
  },
  submit: {
    color: 'white',
    fontWeight: '700',
    paddingTop: 4,
  },
});

export { Weather };
export default Weather;
