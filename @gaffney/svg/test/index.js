import test from 'ava'
import {crescentShape, svgString} from '../src'

const svgControl = ({size = 60, d= ''}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><g stroke="var(--gaffney-svg-moon-fill-0, #000)" stroke-width="1" stroke-location="inside"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="var(--gaffney-svg-moon-fill-1, #000)" vector-effect="non-scaling-stroke"></circle><path d="${d}" fill="var(--gaffney-svg-moon-fill-2, #ff0)" vector-effect="non-scaling-stroke"></path></g></svg>`

test('svgString returns a minified SVG', t => {
  const svg = svgString({})
  t.is(svg, svgControl({}))
})

test('svgString returns the correct custom sized SVG', t => {
  const svg = svgString({size: 120})
  t.is(svg, svgControl({size: 120}))
})

test('svgString returns the correct shape', t => {
  const svg = svgString({d: 'M 60 0 A 30 30 0 1 0 60 120 30 30 0 1 1 60 0'})
  t.is(svg, svgControl({d: 'M 60 0 A 30 30 0 1 0 60 120 30 30 0 1 1 60 0'}))
})

test('crescentShape returns the inputSize', t => {
  const inputSize = 120
  const {size} = crescentShape({size: inputSize})
  t.is(size, inputSize)
})

test('crescentShape allows a custom size', t => {
  const inputSize = 120
  const {d} = crescentShape({size: inputSize})
  t.is(d, `M ${inputSize / 2} 0 A ${-inputSize / 4} ${inputSize / 4} 0 1 0 ${inputSize / 2} ${inputSize} ${inputSize / 4} ${inputSize / 4} 0 1 1 ${inputSize / 2} 0`)
})

test('crescentShape returns the correct default shape', t => {
  t.is(crescentShape({}).d, 'M 30 0 A -15 15 0 1 0 30 60 15 15 0 1 1 30 0')
})

test('crescentShape allows using progress to define the shape', t => {
  t.is(crescentShape({progress: 0}).d, 'M 30 0 A -15 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 1}).d, 'M 30 0 A -13 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 2}).d, 'M 30 0 A -11 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 3}).d, 'M 30 0 A -9 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 4}).d, 'M 30 0 A -7 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 5}).d, 'M 30 0 A -5 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 6}).d, 'M 30 0 A -3 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 7}).d, 'M 30 0 A -1 15 0 1 0 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 8}).d, 'M 30 0 A 1 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 9}).d, 'M 30 0 A 3 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 10}).d, 'M 30 0 A 5 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 11}).d, 'M 30 0 A 7 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 12}).d, 'M 30 0 A 9 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 13}).d, 'M 30 0 A 11 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 14}).d, 'M 30 0 A 13 15 0 1 1 30 60 15 15 0 1 1 30 0')
  t.is(crescentShape({progress: 15}).d, 'M 30 0 A 15 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 16}).d, 'M 30 0 A 13 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 17}).d, 'M 30 0 A 11 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 18}).d, 'M 30 0 A 9 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 19}).d, 'M 30 0 A 7 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 20}).d, 'M 30 0 A 5 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 21}).d, 'M 30 0 A 3 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 22}).d, 'M 30 0 A 1 15 0 1 0 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 23}).d, 'M 30 0 A -1 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 24}).d, 'M 30 0 A -3 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 25}).d, 'M 30 0 A -5 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 26}).d, 'M 30 0 A -7 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 27}).d, 'M 30 0 A -9 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 28}).d, 'M 30 0 A -11 15 0 1 1 30 60 15 15 0 1 0 30 0')
  t.is(crescentShape({progress: 29}).d, 'M 30 0 A -13 15 0 1 1 30 60 15 15 0 1 0 30 0')
})
