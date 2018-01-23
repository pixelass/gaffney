const {PI, cos, sin, floor, ceil, round, min, max, abs} = Math

const getFraction = number => {
  return number - floor(number)
}

const degreeToRadians = degree => {
  return PI / 180 * degree
}

const parseInteger = (number, radix = 10) => parseInt(number, radix)

const leftPad = (num, len) => ('00000000' + num).substr(len * -1)

const math = {
  PI,
  cos,
  sin,
  floor,
  ceil,
  round,
  min,
  max,
  abs,
  leftPad,
  degreeToRadians,
  getFraction,
  parseInteger
}

export {
  PI,
  cos,
  sin,
  floor,
  ceil,
  round,
  min,
  max,
  abs,
  leftPad,
  degreeToRadians,
  getFraction,
  parseInteger
}

export default math
