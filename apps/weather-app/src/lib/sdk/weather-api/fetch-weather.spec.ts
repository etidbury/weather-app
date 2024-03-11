import { fetchWeather } from './fetch-weather';

describe('fetchWeather', () => {
  it('fetches weather data successfully', async () => {
    const data = await fetchWeather({ location: 'London', unit: 'celcius' });
    expect(data).toBeDefined();
    expect(data.resolvedAddress).toBeDefined();
    expect(data.resolvedAddress).toStrictEqual(
      'London, England, United Kingdom'
    );
  });
});
