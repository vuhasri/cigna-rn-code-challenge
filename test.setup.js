/* eslint-disable no-undef */
const mockSafeAreaContext =
  require('react-native-safe-area-context/jest/mock').default;

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('tailwind-rn', () => ({
  useTailwind: () => str => str,
  TailwindProvider: ({children}) => children,
}));
