import {floor} from '@gaffney/utils'
import {getTime} from '@gaffney/date'

const simple = (year, month, day) => {
  const lunarPhase = 2551443
  const now = getTime(year, month - 1, day, 20, 35, 0)
  const newMoon = getTime(1970, 0, 7, 20, 35, 0)
  const phase = ((now - newMoon) / 1000) % lunarPhase
  return floor(phase / 86400) + 1
}

export default simple
