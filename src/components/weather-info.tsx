import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { fetchWeather } from '../api/get-weather';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';

interface WeatherInfoProps {
  location: string;
}

const queryClient = new QueryClient();
const WeatherInfo: React.FC<WeatherInfoProps> = ({ location }) => {
  const tw = useTailwind();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getWeatherData = async (location: string) => {
    const results = await fetchWeather(location);
    return results;
  };
  const { data, isLoading, isError } = useQuery(['weather', location], () =>
    getWeatherData(location),
  );

  const capitalizeFirstWord = (str: string | undefined): string => {
    if (!str) {
      return '';
    }
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  };

  const renderComponents = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (isError) {
      return <Text>Error occurred while fetching weather data.</Text>;
    } else {
      return (
        <View style={styles.container}>
          <View style={tw('mt-1')}>
            <Text style={styles.locationText}>
              {data?.name.toUpperCase() ?? 'LOCATION'}
            </Text>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`,
              }}
              style={styles.weatherImage}
            />
            <Text style={styles.description}>
              {capitalizeFirstWord(data?.weather?.[0].description) ?? ''}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.temperature}>Temperature:</Text>
              <Text style={styles.tempInF}>
                {KtoF(data?.main?.temp ?? 0).toFixed(0)} °F
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      {renderComponents()}
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  locationText: {
    fontWeight: '500',
    fontSize: 19,
    color: 'black',
    marginRight: 10,
    marginTop: 0,
    alignSelf: 'center',
  },
  weatherImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  description: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  temperature: {
    fontWeight: '400',
    fontSize: 11,
    marginRight: 10,
    marginTop: 18,
  },
  tempInF: {
    fontWeight: '400',
    fontSize: 19,
    marginRight: 10,
    marginTop: 10,
    color: 'black',
  },
});

export function KtoF(tempKevlin: number) {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

export default WeatherInfo;
