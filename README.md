## React Native Code Assessment

For this code assessment, we expect you to make the changes listed in the `Deliverables` sections and then email us the link to your merge request.

## Setup

Fork this repo and clone. Then run `npm i` to install neccessary packages. Make sure you have setup a [proper dev environment](https://reactnative.dev/docs/environment-setup).

You will need to sign up for an OpenWeather API key. Instructions are here: https://openweathermap.org/appid

After you get your API, add that as API_KEY in get-weather.ts

## Mock bug report

Steps to reproduce:
1. Click the "Show me the weather" link and navigate to the weather screen.
2. Type a valid location in the "Location" box
3. Press {enter}

Expected results
User should see the current weather results for that lcoation

Actual Results:
App crashes


## Deliverable 1:

1. Fix the bug
   - Treating this like a bug ticket, identify the bug in the application and provide a fix.
2. Talk about your changes
   - Write a short description about what was the underlying cause of the bug and how you fixed it.


## Deliverable 2:

1. Refactor the application to provide the following...

   1. Match the design
      - A designer has provided a comp on how this app should look. Please see the `design.png` file.
        - To match the design you may need to use different fields that are returned from the OpenWeatherMap API. For example, the weather condition three digit code can be [mapped to the icons here](https://openweathermap.org/weather-conditions)
      - Tailwindcss is installed and configured for you. Open another terminal window and run `npm run tailwind-w`
   2. Provide correct the typing in the codebase. 
      - Currently, `any` is used throughout the code. Replace `any` with proper types.   
   3. Introduce `react-query` to the code. 
      - Replace the `fetchWeather` in the `weather-info.tsx` component with a react-query hook.
   4. Make the tests better
      - There was a test written for this feature but it clearly didn't catch the bug, make the test better (you can open a new terminal in the bottom right of code sandbox and run `npm test`)

2. Talk about your changes
   - For the refactor and other accompanying tasks, include any other thoughts, assumptions, or known compromises in how you approached the work.
