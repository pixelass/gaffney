import React, {Component} from 'react'
import {render} from 'react-dom'
import styled from '@stiligita/core'
import styledReact from '@stiligita/react'
import Gaffney from '@gaffney/gaffney'
import {parseInteger as int} from '@gaffney/utils'
import {svgString, svgElement, crescentShape, setAttributeNS} from '@gaffney/svg'
import {getFullYear, getMonth, getDay, getDate, days, months} from '@gaffney/date'

styled.use(styledReact)

const gaffney = new Gaffney()

const YEAR = getFullYear()
const MONTH = getMonth()
const DATE = getDate()
const DAY = getDay()
const PHASE = gaffney.trig2(YEAR, MONTH, DATE)
const FIRST_DAY = getDay(YEAR, MONTH, 1)
const SVG_WIDTH = 700
const SVG_HEIGHT = 600

const Wrapper = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 1em auto;
  --gaffney-svg-moon-fill-1: #1A237E;
  --gaffney-svg-moon-fill-2: #FFCA28;
  --gaffney-calendar-text: #fff;
  --gaffney-calendar-background: #3F51B5;
  --gaffney-calendar-border-x: none;
  --gaffney-calendar-border-y: none;
  --gaffney-calendar-today-stroke: none;
  --gaffney-calendar-today-fill: #F50057;
  --gaffney-calendar-selected-stroke: #fff;
  --gaffney-calendar-selected-fill: var(--gaffney-calendar-background);
`

const Calendar = props =>
  <svg viewBox={`-20 -20 ${SVG_WIDTH + 40} ${SVG_HEIGHT + 40}`}
       {...props}/>

const Background = props => <rect {...{
  x: -10,
  y: -10,
  rx: SVG_HEIGHT / 100,
  ry: SVG_HEIGHT / 100,
  height: SVG_HEIGHT + 20,
  width: SVG_WIDTH + 20,
  fill: 'var(--gaffney-calendar-background, #fff)',
  ...props}}/>

const A = styled.a`
  cursor: pointer;
`

const Day = props => (
  <A href={props.href}>
    <circle key='active'
      r={SVG_HEIGHT/24}
      cx={SVG_WIDTH/14}
      cy={SVG_HEIGHT/24 + SVG_HEIGHT / 100}
      fill='none'
      strokeWidth={SVG_HEIGHT / 300}
      stroke={
        props.today ? 'var(--gaffney-calendar-today-stroke, #00f)'
        : props.selected ? 'var(--gaffney-calendar-selected-stroke, #000)' : 'none'
      }
      fill={
        props.today ? 'var(--gaffney-calendar-today-fill, none)'
        : props.selected ? 'var(--gaffney-calendar-selected-fill, none)' : 'var(--gaffney-calendar-background, #fff)'
      }/>
    <text x={props.x || SVG_WIDTH/14}
          y={props.y || SVG_HEIGHT/24}
          fontFamily='Roboto'
          fontSize={props.fontSize || SVG_HEIGHT/24}
          textAnchor='middle'
          alignmentBaseline='middle'
          fill='var(--gaffney-calendar-text, #000)'>
      {props.children}
    </text>
  </A>
)

const Moon = ({size, phase, position, transform}) => (
  <svg x={position.x} y={position.y}>
    <g  transform={transform}>
      <circle cx={size / 2}
              cy={size / 2}
              r={size / 2}
              fill='var(--gaffney-svg-moon-fill-1, #555)'/>
      <path d={crescentShape({size, progress: phase}).d}
            fill='var(--gaffney-svg-moon-fill-2, #ddd)'/>
    </g>
  </svg>
)

const th = n => ((n, nn) => {
  switch(nn) {
    case 1:
      return `${n}st`
    case 2:
      return `${n}nd`
    case 3:
      return `${n}rd`
    default:
      return `${n}th`
  }
})(n, n % 10)

class App extends Component {
  constructor(){
    super()
    this.state = {
      selected: DATE
    }
    this.stateFromHash = this.stateFromHash.bind(this)
  }

  stateFromHash(e) {
    const selected = parseInt(e.newURL.split('/').reverse()[0].split('-')[2], 10)
    this.setState({selected})
  }

  componentWillMount(){
    window.addEventListener('hashchange', this.stateFromHash)
  }

  componentDidMount(){
    this.stateFromHash({newURL: window.location.hash})
  }

  componentWillUnMount(){
    window.removeEventListener('hashchange', this.stateFromHash)
  }

  render() {
    return (
      <Wrapper>
        <Calendar>
          <Background/>
          <Day fontSize={SVG_HEIGHT / 20}
               x={SVG_WIDTH / 2}>
            {months.long[MONTH]} {th(DATE)} {YEAR}
          </Day>
          {days.short.map((d, i) =>
            <svg key={i}
                 x={SVG_WIDTH / 7 * i}
                 y={SVG_HEIGHT / 12}>
              <Day key='day'
                   y={SVG_HEIGHT/24}>{d}</Day>
            </svg>
          )}
          {[...(new Array(42)).fill().map((x, i) => i + 1 - FIRST_DAY)].map((d, i) =>
            <svg key={i}
                 x={SVG_WIDTH / 7 * (i % 7)}
                 y={SVG_HEIGHT / 6 * (~~(i / 7) + 1)}>
              { (() => {
                if (d < 1 || d > 31) {
                  return null
                }
                return [
                  <Day key='day'
                       y={SVG_HEIGHT/24 + SVG_HEIGHT / 100}
                       fontSize={SVG_HEIGHT/36}
                       href={`#!/${YEAR}-${MONTH}-${d}`}
                       today={d === DATE}
                       selected={d === this.state.selected}>{d}</Day>,
                  <Moon key='moon'
                        position={{x: SVG_WIDTH/7 - SVG_HEIGHT / 20 - SVG_HEIGHT / 50, y: SVG_HEIGHT/6 - SVG_HEIGHT / 20 - SVG_HEIGHT / 50}}
                        phase={(d - 1) % 30}
                        size={SVG_HEIGHT / 20} />
                ]
              })()}
            </svg>
          )}
          {[...(new Array(5)).fill().map((x, i) => i + 1)].map(y =>
            <line key={`line-y_${y}`}
                  x1=''
                  x2={SVG_WIDTH}
                  y1={SVG_HEIGHT / 6 * y}
                  y2={SVG_HEIGHT / 6 * y}
                  stroke='var(--gaffney-calendar-border-y, #000)'/>
          )}
          {[...(new Array(6)).fill().map((x, i) => i + 1)].map(x =>
            <line key={`line-x_${x}`}
                  x1={SVG_WIDTH / 7 * x}
                  x2={SVG_WIDTH / 7 * x}
                  y1={SVG_HEIGHT / 12}
                  y2={SVG_HEIGHT}
                  stroke='var(--gaffney-calendar-border-x, #000)'/>
          )}
        </Calendar>
      </Wrapper>
    )
  }
}

render(<App/>, document.getElementById('mount-point'))
