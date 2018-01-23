const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Septmber',
  'October',
  'November',
  'December'
]
const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const months = {
  long: monthNames,
  short: monthNames.map(x => x.substr(0, 3)),
  initial: monthNames.map(x => x[0])
}

const days = {
  long: dayNames,
  short: dayNames.map(x => x.substr(0, 3)),
  initial: dayNames.map(x => x[0])
}

const date = (...args) => new Date(...args)
const getTime = (...args) => date(...args).getTime
const getDate = (...args) => date(...args).getDate
const getMonth = (...args) => date(...args).getMonth
const getYear = (...args) => date(...args).getYear
const getDay = (...args) => date(...args).getDay

export {date, getDate, getDay, getMonth, getYear, months, days}
