import { SSTConfig } from "sst";
import { NextJsSiteStack } from "./stacks/NextJsSiteStack";

export default {
  config(_input) {
    return {
      name: "weather-app",
      region: "eu-west-2",
    };
  },
  stacks(app) {
      app
      .stack(NextJsSiteStack)
  },
} satisfies SSTConfig;
