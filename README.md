# Gaffney

<p align="center"><img src="https://cdn.rawgit.com/pixelass/gaffney/master/gaffney.svg" alt="gaffney logo" width="200"/></p>

## Status: active development (prototype port)

Prototype: [Codepen Prototype](https://codepen.io/pixelass/pen/baybqZ)

## Demo / Documentation

* [Demo](https://pixelass.github.io/gaffney)
* [Documentation](https://pixelass.github.io/gaffney/api)

<p align="center"><img src="https://cdn.rawgit.com/pixelass/gaffney/master/january-2018.svg" alt="gaffney calendar january 2018" width="640"/></p>

## Why the name Gaffney?

[Vince Gaffney](https://twitter.com/gaffney_v) led the archeological team that
discovered the first calendar made by human kind, a calendar based on the moon.

> The pits were dug in the shapes of various phases of the moon. "Waxing, waning,
> crescents, and gibbous, they're all there and arranged in a 50-meter-long (164-foot) arc.  
> *[National Geographic](https://news.nationalgeographic.com/news/2013/07/130715-worlds-oldest-calendar-lunar-cycle-pits-mesolithic-scotland/)*

## What does this do?

Gaffney provides a set of tools to create lunar and astrology calendars, create APIs
or microservices etc. using data about the moon and stars.

## Simple examples

### SVGs

```js
import {svgString, crescentShape as shape} from '@gaffney/svg'

const svg = svgString(shape({progress: 3}))
```

### single packages

#### simple

```js
import getMoonPhase from '@gaffney/simple'

const moonPhase = getMoonPhase(2018, 4, 20)
```

#### conway

```js
import getMoonPhase from '@gaffney/conway'

const moonPhase = getMoonPhase(2018, 4, 20)
```

#### trig1

```js
import getMoonPhase from '@gaffney/trig1'

const moonPhase = getMoonPhase(2018, 4, 20)
```

#### trig2

```js
import getMoonPhase from '@gaffney/trig2'

const moonPhase = getMoonPhase(2018, 4, 20)
```

### Gaffney as an instance

```js
import Gaffney from '@gaffney/gaffney'
import {
  svgString as moon,
  crescentShape as crescent,
  zodiacSign as zodiac
} from '@gaffney/svg'

const calendar = new Gaffney()

const svgMoon = moon(crescent({
  progress: calendar.trig2(2018, 4, 20)
}))
const svgZodiac = zodiac[calendar.zodiac(2018, 4, 20)]
```

## Credits

* zodiac icons designed by [Dario Ferrando from Flaticon](https://www.flaticon.com/authors/dario-ferrando)
* moon-phase functions are ripped/inspired/ported from [Ben Danglish](http://www.ben-daglish.net/moon.shtml)

## Similar projects

* https://github.com/tingletech/moon-phase (I got some helpful links from this repo)
