// to get api key: https://openweathermap.org/appid
const API_KEY = '6f67f94230310ffa09b6d2ce8ccfdf5f';
// 'ec3d1ed235d3d10077ecc21d994b4dae';
// '6f67f94230310ffa09b6d2ce8ccfdf5f';

export async function fetchWeather(location: string): Promise<any> {
  // Replace this with your actual weather API call
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
  );
  console.log('response:::', response);

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${location} - ${data?.message ?? response.statusText}`);
  }

  return data;
}
