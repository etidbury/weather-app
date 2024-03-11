import fetch from 'cross-fetch';
import { WeatherResponse } from './schema';
import { z } from 'zod';
export { WeatherResponse };
export const schema = z.object({
  location: z.string({
    invalid_type_error: 'Invalid location specified',
  }),
  unit: z.enum(['fahrenheit', 'celcius'], {
    invalid_type_error: 'Invalid temperature measure unit specified',
  }),
});

export const fetchWeather = async (query: {
  location: string;
  unit: 'celcius' | 'fahrenheit';
}): Promise<Zod.infer<typeof WeatherResponse>> => {
  const { WEATHER_API_KEY } = process.env; //todo: replace with env var

  if (!WEATHER_API_KEY) {
    throw new Error('Missing WEATHER_API_KEY env var');
  }

  const validatedFields = schema.safeParse(query);

  if (!validatedFields.success) {
    throw new Error('Invalid query');
  }

  const [response] = await Promise.all([
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        validatedFields.data.location
      )}?unitGroup=${
        validatedFields.data.unit === 'celcius' ? 'metric' : 'us' //fahrenheit
      }&include=days%2Ccurrent&key=${WEATHER_API_KEY}&contentType=json`
    ),
    new Promise((r) => setTimeout(r, 1000)), //todo: remove this after testing
  ]);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();

  return WeatherResponse.parse(data);
};
