import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../app';

const mockNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigation,
    }),
  };
});

describe('weather app', () => {
  it('navigates to weather screen', () => {
    const screen = render(<App />);
    fireEvent.press(screen.getByText('Show me the weather'));
    expect(mockNavigation).toHaveBeenCalledWith('weather');
  });
});
