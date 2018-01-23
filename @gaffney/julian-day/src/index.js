import {floor, parseInteger as int} from '@gaffney/utils'

const julianDay = (year, month, day) => {
  let y = year
  if (y < 0) {
    y++
  }
  let jy = int(y)
  let jm = int(month) + 1
  if (month <= 2) {
    jy--
    jm += 12
  }
  let jul = floor(365.25 * jy) + floor(30.6001 * jm) + int(day) + 1720995
  if (day + 31 * (month + 12 * y) >= 15 + 31 * (0 + 12 * 1582)) {
    const ja = floor(0.01 * jy)
    jul = jul + 2 - ja + floor(0.25 * ja)
  }
  return jul
}

export default julianDay
