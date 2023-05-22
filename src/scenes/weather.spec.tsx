import 'react-native';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react-native';
import App from '../app';

const server = setupServer(
  rest.get('https://api.openweathermap.org/*', (req, res, ctx) => {
    return res(
      ctx.json({
        weather: [
          {
            description: 'Overcast clouds',
          },
        ],
        main: {
          // temp in Kelvin
          temp: 295.372,
        },
      }),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('shows weather results', () => {
  render(<App />);
  // todo: write some assertions
});
// todo: add more tests, maybe error handling?
