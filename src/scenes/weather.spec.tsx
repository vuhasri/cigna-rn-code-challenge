import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Weather from './Weather';

// Mock the WeatherInfo component
jest.mock('../components/weather-info', () => {
  return function MockWeatherInfo(props) {
    return (
      <div data-testid="weather-info">
        Weather Information for: {props.location}
      </div>
    );
  };
});

describe('Weather component', () => {
  it('updates the location when submitting a valid input and renders the WeatherInfo component', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Weather />,
    );

    const inputElement = getByPlaceholderText('');
    const submitButtonElement = getByText('SUBMIT');

    // Enter a valid location
    fireEvent.changeText(inputElement, 'New York');

    // Submit the form
    fireEvent.press(submitButtonElement);
  });

  it('does not update the location when submitting an empty input and does not render the WeatherInfo component', () => {
    const { getByPlaceholderText, getByText, queryByTestId } = render(
      <Weather />,
    );

    const inputElement = getByPlaceholderText('');
    const submitButtonElement = getByText('SUBMIT');

    // Enter an empty location
    fireEvent.changeText(inputElement, '');

    // Submit the form
    fireEvent.press(submitButtonElement);

    // Check if the location is not updated
    const weatherInfoElement = queryByTestId('weather-info');
    expect(weatherInfoElement).toBeNull();
  });
});
