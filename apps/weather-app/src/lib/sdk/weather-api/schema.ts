import { z } from 'zod';

const WeatherCondition = z.object({
  datetime: z.string(),
  datetimeEpoch: z.number(),
  temp: z.number(),
  conditions: z.string(),
  icon: z.string(),
  tempmax: z.number(),
  tempmin: z.number(),
  sunriseEpoch: z.number(),
  sunsetEpoch: z.number(),
  humidity: z.number(),
  cloudcover: z.number(),
  description: z.string().optional(),
});

const CurrentWeatherCondition = z.object({
  datetime: z.string(),
  datetimeEpoch: z.number(),
  temp: z.number(),
  conditions: z.string(),
  icon: z.string(),
  humidity: z.number(),
  cloudcover: z.number(),
  description: z.string().optional(),
});

const WeatherResponse = z.object({
  queryCost: z.number(),
  latitude: z.number(),
  longitude: z.number(),
  resolvedAddress: z.string(),
  address: z.string(),
  timezone: z.string(),
  tzoffset: z.number(),
  days: z.array(WeatherCondition),
  currentConditions: CurrentWeatherCondition,
});

export { WeatherResponse, WeatherCondition };
