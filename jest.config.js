const project = require('./project.json');

module.exports = {
  "collectCoverageFrom": [project.scripts.source.files],
  "coverageReporters": ["html"],
  "coverageThreshold": {
    "global": {
      "statements": 100,
      "branches": 100,
      "functions": 100,
      "lines": 100
    }
  },
  "transform": {
    "^.+\\.js$": "babel-jest"
  }
}
