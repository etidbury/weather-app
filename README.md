# Weather App

![image 1](https://github.com/echo724/notion2md/assets/78376735/6b880ad1-3ff2-4cdd-8d06-ff708314772d)

### Objective

Using a NX monorepo, TypeScript, React and Next.js your task is to build a Weather App.

### Brief

In England, we love talking about the weather. To help people have informed conversations about the weather; your assignment is to use data from the [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) and display it so it looks like [this design document](https://www.figma.com/file/FNdVsOUJA53CWMW9mnraYk/Weather-App?type=design&node-id=0%3A1&t=FPsFSmGIgDaH48F6-1). It doesn't have to be pixel pefect- but should maintain functional and operational integrity when used on different types of devices with different screen resolutions.

### Tasks

Fork this branch and then design, organise, test, lint and document your code using the scenario of it being deployed to production and be used by a user base of approx. 5,000 daily active users.

You have complete freedom over how and how long you want to spend to deliver the following requirements:

- The app can be accessed through a public URL.
- On first load, the app should show the weather for a specific place.
- Users can see accurate and relevant weather information based on their search.
- Users are able to see relevant information displayed in different metrics.
- Users are notified if there is no information returned from their search.

### Development

The NX monorepo handles tasks relating to your codebase. A few useful commands are:

- Run development server `npx nx run weather-app:dev`
- Run build `npx nx weather-app:build`
- Run tests `npx nx weather-app:test`

More info on working with Next.js in NX can be found [here](https://nx.dev/packages/next#setting-up-next.js).

### Implementation Details

Please include some information that considers certain areas for future improvement such as:

- Architectural choices.
- Data sanitisation & validation.
- Accessibility.
- Potential performance bottle necks and optimisations
- High fault tolerance.
