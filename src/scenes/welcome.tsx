import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const Welcome: React.FC = () => {
  const tw = useTailwind();

  const navigation = useNavigation<any>();

  const navigateToWeatherScreen = () => {
    navigation.navigate('weather');
  };

  return (
    <View style={tw('flex-1 justify-center items-center p-1')}>
      <Text style={tw('text-2xl font-bold mb-4')}>Weather Search</Text>
      <Pressable style={tw('mt-8')} onPress={navigateToWeatherScreen}>
        <Text style={tw('text-blue-500 font-bold')}>Show me the weather</Text>
      </Pressable>
    </View>
  );
};

export {Welcome};
export default Welcome;
