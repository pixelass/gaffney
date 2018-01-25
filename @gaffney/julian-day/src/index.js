import {floor} from '@gaffney/utils'

const julianDay = (year, month, day) => {
  let jy = year
  let jm = month + 1
  if (month <= 2) {
    jy--
    jm += 12
  }
  let jul = floor(365.25 * jy) + floor(30.6001 * jm) + day + 1720995
  if (day + 31 * (month + 12 * year) >= 98099) {
    const ja = floor(0.01 * jy)
    jul = jul + 2 - ja + floor(0.25 * ja)
  }
  return jul
}

export default julianDay
