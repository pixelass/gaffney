# Gaffney

<p align="center"><img src="https://cdn.rawgit.com/pixelass/gaffney/master/gaffney.svg" alt="gaffney logo" width="200"/></p>

## Status: active development (prototype port)

Prototype: [Codepen Prototpe](https://codepen.io/pixelass/pen/baybqZ)

## Why the name Gaffney?

[Vince Gaffney](https://twitter.com/gaffney_v) led the archeological team that
discovered the first calendar made by human kind, a calender based on the moon.

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

const lunarCalendar = new Gaffney()

const moonPhase = calendar.trig2(2018, 4, 20)
const zodiacPhase = calendar.zodiac(2018, 4, 20)
const svgMoon = moon(crescent({progress: moonPhase}))
const svgZodiac = zodiac(zodiacPhase)
```
