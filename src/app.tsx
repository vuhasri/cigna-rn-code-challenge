import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TailwindProvider as BaseProvider, Utilities } from 'tailwind-rn';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import utilities from '../tailwind.json';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Weather, Welcome } from './scenes';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

interface TailwindProviderProps {
  children?: React.ReactNode;
  utilities: Utilities;
  colorScheme?: ColorSchemeName;
}

const TailwindProvider: React.FC<TailwindProviderProps> = props => (
  <BaseProvider {...props} />
);
const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TailwindProvider utilities={utilities}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="welcome"
                  component={Welcome}
                  options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                  name="weather"
                  component={Weather}
                  options={{ title: 'Weather' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </QueryClientProvider>
        </TailwindProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
