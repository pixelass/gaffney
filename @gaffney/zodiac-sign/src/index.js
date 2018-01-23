import {leftPad as pad, parseInteger} from '@gaffney/utils'
import {getMonth, getDay} from '@gaffney/date'

const zodiacSign = (...date) => {
  let sign = ''
  const month = getMonth(...date) + 1
  const day = getDate(...date)
  const mdd = parseInteger(month + pad(day, 2))
  if (mdd < 120) {
    sign = 'capricorn'
  } else if (mdd < 218) {
    sign = 'aquarius'
  } else if (mdd < 320) {
    sign = 'pisces'
  } else if (mdd < 420) {
    sign = 'aries'
  } else if (mdd < 521) {
    sign = 'taurus'
  } else if (mdd < 621) {
    sign = 'gemini'
  } else if (mdd < 722) {
    sign = 'cancer'
  } else if (mdd < 823) {
    sign = 'leo'
  } else if (mdd < 923) {
    sign = 'virgo'
  } else if (mdd < 1023) {
    sign = 'libra'
  } else if (mdd < 1122) {
    sign = 'scorpius'
  } else if (mdd < 1222) {
    sign = 'sagittarius'
  } else if (mdd < 1231) {
    sign = 'capricorn'
  }
  return sign
}
