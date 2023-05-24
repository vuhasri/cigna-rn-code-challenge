import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Welcome component', () => {
  it('navigates to the Weather screen when the button is pressed', () => {
    // Mock the navigate function from useNavigation
    const navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(<Welcome />);

    const buttonElement = getByText('Show me the weather');

    // Simulate button press
    fireEvent.press(buttonElement);

    // Check if navigate function is called with the correct screen name
    expect(navigateMock).toHaveBeenCalledWith('weather');
  });
});
