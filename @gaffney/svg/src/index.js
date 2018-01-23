const xmlns = 'http://www.w3.org/2000/svg'

const crescentShape = ({radius, size = 60}) => {
  const r2 = radius * 2
  const sH = size / 2
  const sQ = size / 4
  const r = Math.abs(sH - r2)
  // prettier-ignore
  const d = [
    'M', sH, 0,
    'A', r2 < sQ * 3 ? r - sQ : sQ - r, sQ,
    0, 1, Math.floor(r2 / sQ) % 2,
    sH, size, sQ, sQ,
    0, 1, 1 - Math.floor(r2 / sH),
    sH, 0
  ].join(' ')

  return {
    size,
    d
  }
}

const svgString = ({d, size = 60}) => `
<svg xmlns="${xmlns}" viewBox="0 0 ${size} ${size}">
  <g stroke="var(--gaffney-svg-moon-fill-0, #000)"
     stroke-width="1"
     stroke-location="inside">
    <circle cx="${size / 2}"
            cy="${size / 2}"
            r="${size / 2}"
            fill="var(--gaffney-svg-moon-fill-1, #000)"
            vector-effect="non-scaling-stroke">
    </circle>
    <path d="${d}"
          fill="var(--gaffney-svg-moon-fill-2, #ff0)"
          vector-effect="non-scaling-stroke">
    </path>
  </g>
</svg>
`

const setAttributeNS = (el, k, v) => el.setAttributeNS(null, k, v)
const createElementNS = el => document.createElementNS(xmlns, el)

const svgElement = ({d = '', size = 60}) => {
  const svg = createElementNS('svg')
  const g = createElementNS('g')
  const circle = createElementNS('circle')
  const path = createElementNS('path')
  // SVG
  setAttributeNS(svg, 'viewBox', `0 0 ${size} ${size}`)
  // Cirle
  setAttributeNS(g, 'stroke', `var(--gaffney-svg-moon-fill-0, #000)`)
  setAttributeNS(g, 'stroke-width', 1)
  setAttributeNS(g, 'stroke-location', 'inside')
  // Cirle
  setAttributeNS(circle, 'cx', size / 2)
  setAttributeNS(circle, 'cy', size / 2)
  setAttributeNS(circle, 'r', size / 2)
  setAttributeNS(circle, 'fill', 'var(--gaffney-svg-moon-fill-1, #000)')
  setAttributeNS(circle, 'vector-effect', 'non-scaling-stroke')
  // Path
  setAttributeNS(path, 'd', d)
  setAttributeNS(path, 'fill', 'var(--gaffney-svg-moon-fill-2, #ff0)')
  setAttributeNS(path, 'vector-effect', 'non-scaling-stroke')

  svg.appendChild(g)
  g.appendChild(circle)
  g.appendChild(path)
  return {
    svg,
    path
  }
}

export {svgString, svgElement, crescentShape, setAttributeNS}
