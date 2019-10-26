# Fyzer
> The easiest way to be notified when some element appears above the page fold

[![CircleCI](https://circleci.com/gh/glorious-codes/glorious-fyzer.svg?style=svg)](https://circleci.com/gh/glorious-codes/glorious-fyzer)
[![codecov](https://codecov.io/gh/glorious-codes/glorious-fyzer/branch/master/graph/badge.svg)](https://codecov.io/gh/glorious-codes/glorious-fyzer)

## Installation

```
$ npm install -S @glorious/fyzer
```

## Usage

``` javascript
import fyzer from '@glorious/fyzer';

const element = document.querySelector('#myElement');

const subscriptionId = fyzer.subscribe(element, () => {
  // This function will be called every time
  // element appears above the fold.
});

// When you no longer needs to observe the element's position,
// you can unsubscribe from Fyzer:
fyzer.unsubscribe(subscriptionId);
```

## Contributing

1. Install [Node](https://nodejs.org/en/). Download the "Recommend for Most Users" version.

2. Clone the repo:
``` bash
git clone git@github.com:glorious-codes/glorious-fyzer.git
```

3. Go to the project directory:
``` bash
cd glorious-fyzer
```

4. Install the project dependencies:
``` bash
npm install
```

## Tests

Ensure that all code that you have added is covered with unit tests:
``` bash
npm run test -- --coverage
```
