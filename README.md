# Covid-19 tracker app

## Introduction

Have a look at the latest global coronavirus statistics snapshot with an interactive dashboard right now.
You can explore daily and cumulative data per chosen country or for the whole globe as well as countries ranking by confirmed cases and death count over time.

## Run the app locally

1. `https://github.com/alexander-kilyushin/covid-monitor.git`
2. `cd covid-monitor`
3. `make dev` or `docker-compose -f ./compose.dev.yml up` or `npm install && npm run dev`

## Tech stack

- TypeScript
- React
- Redux
- Material UI
- Reavix charting library

## Data source

Data for the app is maintained by [Our World In Data](https://link-url-here.org) and can be loaded [here](https://covid.ourworldindata.org/data/owid-covid-data.json).

## Guide

Select a country name you are interested in or leave it blank to see the global statistics. Navigate further between two available tabs named Reported cases and Ranked Charts.

Here you can see the Reported cases linear graph chart for Brazil.

At the bottom one can switch between death count or confirmed cases and between daily new values or cumulative mode.

Another tab Ranked charts renders a bar chart. Selected country, if any, will be highlighted in red.

Change your chart with chart control settings: jump between confirmed cases and death count, the same as at the previous tab, and choose the number of countries you want to be displayed at the moment.

## Customization

In case you prefer a dark mode please find a toggle to switch a mode at the right upper corner.

## Responsiveness

App is available in both desktop and mobile versions.

## Optimizations

To prevent long data loading after every page refresh (about 100MB), the loaded data is cached in your browser storage.
