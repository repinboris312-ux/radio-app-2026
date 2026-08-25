const fs = require('fs');
const path = require('path');

// Merge all station files
const stations = [
  ...require('./stations.json'),
  ...require('./stations_extended_part1.json'),
  ...require('./stations_extended_part2.json')
];

module.exports = stations;
