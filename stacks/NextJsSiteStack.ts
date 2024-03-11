import { NextjsSite, StackContext } from 'sst/constructs';
import { Duration } from 'aws-cdk-lib';
import {
  CachePolicy,
  CacheQueryStringBehavior,
  CacheHeaderBehavior,
  CacheCookieBehavior,
} from 'aws-cdk-lib/aws-cloudfront';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function NextJsSiteStack({ stack }: StackContext) {
  if (!process.env.WEATHER_API_KEY) {
    throw new Error('WEATHER_API_KEY environment variable is required');
  }

  const serverCachePolicy = new CachePolicy(stack, 'ServerCache', {
    queryStringBehavior: CacheQueryStringBehavior.all(),
    headerBehavior: CacheHeaderBehavior.none(),
    cookieBehavior: CacheCookieBehavior.none(),
    defaultTtl: Duration.minutes(1),
    maxTtl: Duration.minutes(2),
    minTtl: Duration.minutes(1),
    enableAcceptEncodingBrotli: true,
    enableAcceptEncodingGzip: true,
  });

  const site = new NextjsSite(stack, 'weather-app-web', {
    path: __dirname + '/apps/weather-app/',
    environment: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY as string,
    },
    cdk: {
      serverCachePolicy,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
