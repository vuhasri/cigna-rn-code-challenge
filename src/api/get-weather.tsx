// to get api key: https://openweathermap.org/appid
const API_KEY = '<add_api_key_here>';

export async function fetchWeather(location: string): Promise<any> {
  // Replace this with your actual weather API call
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${location} - ${data?.message ?? response.statusText}`);
  }

  return data;
}
