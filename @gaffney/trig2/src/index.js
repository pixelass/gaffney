import {
  floor,
  sin,
  ceil,
  getFraction as fr,
  degreeToRadians as rad
} from '@gaffney/utils'
import julianDay from '@gaffney/julian-day'

const trig2 = (year, month, day) => {
  const JULIAN_DAY = julianDay(year, month, day)
  const n = floor(12.37 * (year - 1900 + (month - 0.5) / 12))
  const t = n / 1236.85
  const t2 = t * t
  const aS = 359.2242 + 29.105356 * n
  const aM = 306.0253 + 385.816918 * n + 0.01073 * t2
  const extra =
    0.75933 +
    1.53058868 * n +
    (1.178e-4 - 1.55e-7 * t) * t2 +
    (0.1734 - 3.93e-4 * t) * sin(rad(aS)) -
    0.4068 * sin(rad(aM))
  const i = extra > 0 ? floor(extra) : ceil(extra - 1)
  const jD = 2415020 + 28 * n + i
  return (JULIAN_DAY - jD + 30) % 30
}

export default trig2
