import {
  floor,
  sin,
  getFraction as fr,
  degreeToRadians as rad
} from '@gaffney/utils'
import julianDay from '@gaffney/julian-day'

const trig1 = (year, month, day) => {
  const JULIAN_DAY = julianDay(year, month, day)
  const K0 = floor((year - 1900) * 12.3685)
  const T = (year - 1899.5) / 100
  const T2 = T * T
  T3 = T * T * T
  const J0 = 2415020 + 29 * K0
  const F0 =
    0.0001178 * T2 -
    0.000000155 * T3 +
    (0.75933 + 0.53058868 * K0) -
    (0.000837 * T + 0.000335 * T2)
  const M0 =
    360 * fr(K0 * 0.08084821133) + 359.2242 - 0.0000333 * T2 - 0.00000347 * T3
  const M1 =
    360 * fr(K0 * 0.07171366128) + 306.0253 + 0.0107306 * T2 + 0.00001236 * T3
  const B1 =
    360 * fr(K0 * 0.08519585128) + 21.2964 - 0.0016528 * T2 - 0.00000239 * T3
  let oldJ
  let jDay = 0
  let phase = 0
  while (jDay < JULIAN_DAY) {
    let f = F0 + 1.530588 * phase
    const M5 = rad(M0 + phase * 29.10535608)
    const M6 = rad(M1 + phase * 385.81691806)
    const B6 = rad(B1 + phase * 390.67050646)
    f -= 0.4068 * sin(M6) + (0.1734 - 0.000393 * T) * sin(M5)
    f += 0.0161 * sin(2 * M6) + 0.0104 * sin(2 * B6)
    f -= 0.0074 * sin(M5 - M6) - 0.0051 * sin(M5 + M6)
    f += 0.0021 * sin(2 * M5) + 0.001 * sin(2 * B6 - M6)
    f += 0.5 / 1440
    oldJ = jDay
    jDay = J0 + 28 * phase + floor(f)
    phase++
  }
  return (JULIAN_DAY - oldJ) % 30
}

export default trig1
