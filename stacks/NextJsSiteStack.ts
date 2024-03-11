import { NextjsSite, StackContext } from "sst/constructs";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function NextJsSiteStack({ stack }: StackContext) {

  if (!process.env.WEATHER_API_KEY) {
    throw new Error('WEATHER_API_KEY environment variable is required');
  }

  const site = new NextjsSite(stack, "weather-app-web", {
    path: __dirname + '/apps/weather-app/',
    environment: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY as string,
    }
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}