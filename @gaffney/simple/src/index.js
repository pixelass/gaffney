import {floor} from '@gaffney/utils'
import date from '@gaffney/date'

const simple = (year, month, day) => {
  const lunarPhase = 2551443
  const now = date(year, month, day, 20, 35, 0)
  const newMoon = date(1970, 0, 7, 20, 35, 0)
  const phase = ((now.getTime() - newMoon.getTime()) / 1000) % lunarPhase
  return floor(phase / 86400)
}

export default simple
