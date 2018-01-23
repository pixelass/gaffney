const xmlns = 'http://www.w3.org/2000/svg'

/**
 * Creates a cresent path for the moon svg.
 * The shape is based on the moon phases (0 - 29).
 * The size can be adjusted but it is recommended to keep the size at 60.
 *
 * @param  {Object} options
 *   Object of options
 * @param  {number} options.progress
 *   The progress of the crescent (default: 0 - 29 as integer)
 * @param  {number} options.size
 *   The size of the viewBox (square)
 * @return {Object}
 *   The value for the `d` attribute of an `svg path` and the size
 *   as properties in an object `{d, size}`
 */
const crescentShape = ({progress = 0, size = 60}) => {
  const r2 = progress * 2
  const sH = size / 2
  const sQ = size / 4
  const r = Math.abs(sH - r2)
  // Create d attribute value.
  // One side is a perfect circle while the other side approaches to create a
  // full moon and new moon in alternating order
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

/**
 * Creates an SVG as a string. Does not require `document` and can be used to
 * render SVGs server-side.
 *
 * The SVG uses two CSS variables:
 * * --gaffney-svg-moon-fill-1 (default: #000)
 * * --gaffney-svg-moon-fill-2 (default: #ff0)
 *
 * Define these variables at any level to change the color of the SVG.
 *
 * @param  {Object} options
 *   Object of options
 * @param  {string} options.d
 *   The d attribute value of an `svg path` (crescent shape to circle)
 * @param  {number} options.size
 *   The size of the viewBox
 * @return {String}
 *   The final SVG as a string (`<svg [...]>[...]</svg>`)
 */
const svgString = ({d = '', size = 60}) =>
  `
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
    .replace(/\s+/g, ' ')
    .replace(/[>]\s+[<]/g, '><')
    .trim()

/**
 * Lazy attribute setter for SVG elements.
 *
 * @param  {Function} el
 *   A valid SVG element
 * @param  {string}   k
 *   The name of the attribute
 * @param  {string}   v
 *   The value of the attribute
 */
const setAttributeNS = (el, k, v) => el.setAttributeNS(null, k, v)
/**
 * Laszy SVG element creator
 *
 * @param  {string} el
 *   The name of the element
 * @return {SVGElement}
 *   A valid SVG element
 */
const createElementNS = el => document.createElementNS(xmlns, el)

/**
 * Creates an SVG as a DOM element. Requires `document`.
 *
 * The SVG uses two CSS variables:
 * * --gaffney-svg-moon-fill-1 (default: #000)
 * * --gaffney-svg-moon-fill-2 (default: #ff0)
 *
 * Define these variables at any level to change the color of the SVG.
 *
 * @param  {Object} options
 *   Object of options
 * @param  {string} options.d
 *   The d attribute value of an `svg path` (crescent shape to circle)
 * @param  {number} options.size
 *   The size of the viewBox
 * @return {Object}
 *   The svg and path elements as properties in an object `{svg, path}`
 */
const svgElement = ({d = '', size = 60}) => {
  const svg = createElementNS('svg')
  const g = createElementNS('g')
  const circle = createElementNS('circle')
  const path = createElementNS('path')
  // SVG
  setAttributeNS(svg, 'viewBox', `0 0 ${size} ${size}`)
  // Group
  setAttributeNS(g, 'stroke', `var(--gaffney-svg-moon-fill-0, #000)`)
  setAttributeNS(g, 'stroke-width', 1)
  setAttributeNS(g, 'stroke-location', 'inside')
  // Circle
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
