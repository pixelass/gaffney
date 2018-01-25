const date = (...args) =>
  args.length === 3
    ? new Date(args[0], args[1] - 1, args[2])
    : new Date(...args)
const getTime = (...args) => date(...args).getTime()
const getDate = (...args) => date(...args).getDate()
const getMonth = (...args) => date(...args).getMonth() + 1
const getFullYear = (...args) => date(...args).getFullYear()
const getDay = (...args) => date(...args).getDay()

/**
 * All months in english
 *
 * @type {Array}
 */
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

/**
 * All days in english
 * First day: sunday
 *
 * @type {Array}
 */
const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

/**
 * Gets the monday.
 *
 * @return {number}
 *   The nth day in the week (zero based).
 */
const getMonday = () => {
  const today = date()
  const day = getDay()
  const diff = getDate() - day + (day == 0 ? -6 : 1)
  return getDay(diff)
}

// Ensure correct monday for timezone
// This might cause issues.
// @todo create a package for timezones?
if (getMonday() === 0) {
  const [sun] = dayNames
  dayNames.shift()
  dayNames.push(sun)
}

/**
 * Object containing different length names of the months
 *
 * @type {<type>}
 */
const months = {
  long: monthNames,
  short: monthNames.map(x => x.substr(0, 3)),
  initial: monthNames.map(x => x[0])
}

/**
 * Object containing different length names of the days
 *
 * @type {Object}
 */
const days = {
  long: dayNames,
  short: dayNames.map(x => x.substr(0, 3)),
  initial: dayNames.map(x => x[0])
}

export {date, getDate, getDay, getMonth, getFullYear, getTime, months, days}
