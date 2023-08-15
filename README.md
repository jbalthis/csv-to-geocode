# CSVtoGeoCode

_**Convert .csv to JSON Geocode**_

## Description

Easily convert any .csv file that contains latitude and longtitude coordinates into a JSON Geocode file.

## Usage

### Requirements

- nodejs
- a .csv file formatted with a title, description, longitude, and latitude entry for each row (more elements are not required, but no hindrance).

### Installation

- clone this repo [https://github.com/jbalthis/csv-to-geocode](https://github.com/jbalthis/csv-to-geocode)
- `cd csv-to-geocode`
- `npm i`

### Run the Code

- `node main.js "example.csv"`
- (note: replace example.csv with your formatted .csv)
- the new "features.json" file contains your geocode.