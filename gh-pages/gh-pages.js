import Gaffney from '@gaffney/gaffney'
import {parseInteger as int} from '@gaffney/utils'
import {svgString, svgElement, crescentShape, setAttributeNS} from '@gaffney/svg'
import {days, months} from '@gaffney/date'

const gaffney = new Gaffney()

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()
const date = today.getDate()
const day = today.getDay()
const phase = gaffney.trig2(year, month, date)
const svg = svgString(crescentShape({radius: phase, size: 120}))
const $mountPoint = document.getElementById('mount-point')



const animation = svgElement(crescentShape({radius: 0, size: 60}))

const th = int(`${date}`.split('').reverse()[0])
$mountPoint.innerHTML = `
<style>
:root {--gaffney-svg-moon-fill-1: #24223a; --gaffney-svg-moon-fill-2: #fd7a34}
h1 {display: flex; width: 100%}
svg {height: 1em; overflow: visible}
</style>
<h1><span id="animation"></span> Gaffney</h1>
<div>
  ${svg} ${days.long[day]} ${months.long[month]}
  ${date}${th === 1 ? 'st' : th === 2 ? 'nd' : th === 3 ? 'rd' : 'th'}
  ${year}
</div>
`
const animationBox = document.getElementById('animation')

const draw = (counter = 0) => {
  setAttributeNS(animation.path, 'd', crescentShape({radius: counter}).d)
  setTimeout(() => {
    requestAnimationFrame(draw.bind(this, ++counter%30))
  }, 100)
}

animationBox.appendChild(animation.svg)

draw()
