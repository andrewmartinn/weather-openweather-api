# weather-openweather-api

A weather app that allows users to get the current weather for a specific location using the Open Weather API. Users can search for a city to get real-time weather information including temperature, weather conditions, and other relevant details.

## Technologies Used

- [CRA](https://create-react-app.dev/): Create React App Set up a modern web app by running one command
- [OpenWeather](https://openweathermap.org/api) API: Weather data provider
- [Chakra UI](https://chakra-ui.com/): Simple, modular and accessible component library
- [React Icons](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript

## Features

- Search for weather by city name
- Display current temperature and weather conditions
- Dynamic background changes based on temperature
- Toggle between Fahrenheit and Celsius units

## Project Outcomes

- Custom Hooks: Learned to create custom hooks in React, including a hook to convert Unix timestamps to date time strings and a useFetch hook to fetch data from APIs.
- Consuming APIs for Real-Time Data: Gained experience in consuming APIs to present real-time weather data in a user-friendly format.
- Custom Responsive Chakra UI Components: Created custom UI components utilizing Chakra UI that are responsive and mobile friendly.

## Project Setup

This project was bootstrapped with Create React App.

To get started you need to:

- Clone the project
- Install listed dependencies
- Create an OpenWeather API key and set it in the .env file
- Run available scripts

### Install dependencies

```
npm install
```

## Obtain an OpenWeather API key

- Go to OpenWeather and sign up for an account.
- Generate an API key in the API keys section of your account.
- Add your API key to the .env file.

```
REACT_APP_API_KEY=YOUR_API_KEY
```

### Run React dev server (http://localhost:3000)

```
npm run dev
```

### Run the JSON server (http://localhost:5000)

```
npm run server
```

### To build for production

```
npm run build
```

## Deployment

To deploy this project run

```
  npm run deploy
```
