import {floor, parseInteger as int} from '@gaffney/utils'

const conway = (year, month, day) => {
  let r = year % 100
  r %= 19
  if (r > 9) {
    r -= 19
  }
  r = (r * 11) % 30 + int(month) + int(day)
  if (month < 3) {
    r += 2
  }
  r -= year < 2000 ? 4 : 8.3
  r = floor(r + 0.5) % 30
  return r < 0 ? r + 30 : r
}

export default conway
