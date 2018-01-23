'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var xmlns = 'http://www.w3.org/2000/svg';

var crescentShape = function crescentShape(_ref) {
  var radius = _ref.radius,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 60 : _ref$size;

  var r2 = radius * 2;
  var sH = size / 2;
  var sQ = size / 4;
  var r = Math.abs(sH - r2);
  // prettier-ignore
  var d = ['M', sH, 0, 'A', r2 < sQ * 3 ? r - sQ : sQ - r, sQ, 0, 1, Math.floor(r2 / sQ) % 2, sH, size, sQ, sQ, 0, 1, 1 - Math.floor(r2 / sH), sH, 0].join(' ');

  return {
    size: size,
    d: d
  };
};

var svgString = function svgString(_ref2) {
  var d = _ref2.d,
      _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 60 : _ref2$size;
  return '\n<svg xmlns="' + xmlns + '" viewBox="0 0 ' + size + ' ' + size + '">\n  <g stroke="var(--gaffney-svg-moon-fill-0, #000)"\n     stroke-width="1"\n     stroke-location="inside">\n    <circle cx="' + size / 2 + '"\n            cy="' + size / 2 + '"\n            r="' + size / 2 + '"\n            fill="var(--gaffney-svg-moon-fill-1, #000)"\n            vector-effect="non-scaling-stroke">\n    </circle>\n    <path d="' + d + '"\n          fill="var(--gaffney-svg-moon-fill-2, #ff0)"\n          vector-effect="non-scaling-stroke">\n    </path>\n  </g>\n</svg>\n';
};

var setAttributeNS = function setAttributeNS(el, k, v) {
  return el.setAttributeNS(null, k, v);
};
var createElementNS = function createElementNS(el) {
  return document.createElementNS(xmlns, el);
};

var svgElement = function svgElement(_ref3) {
  var _ref3$d = _ref3.d,
      d = _ref3$d === undefined ? '' : _ref3$d,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 60 : _ref3$size;

  var svg = createElementNS('svg');
  var g = createElementNS('g');
  var circle = createElementNS('circle');
  var path = createElementNS('path');
  // SVG
  setAttributeNS(svg, 'viewBox', '0 0 ' + size + ' ' + size);
  // Cirle
  setAttributeNS(g, 'stroke', 'var(--gaffney-svg-moon-fill-0, #000)');
  setAttributeNS(g, 'stroke-width', 1);
  setAttributeNS(g, 'stroke-location', 'inside');
  // Cirle
  setAttributeNS(circle, 'cx', size / 2);
  setAttributeNS(circle, 'cy', size / 2);
  setAttributeNS(circle, 'r', size / 2);
  setAttributeNS(circle, 'fill', 'var(--gaffney-svg-moon-fill-1, #000)');
  setAttributeNS(circle, 'vector-effect', 'non-scaling-stroke');
  // Path
  setAttributeNS(path, 'd', d);
  setAttributeNS(path, 'fill', 'var(--gaffney-svg-moon-fill-2, #ff0)');
  setAttributeNS(path, 'vector-effect', 'non-scaling-stroke');

  svg.appendChild(g);
  g.appendChild(circle);
  g.appendChild(path);
  return {
    svg: svg,
    path: path
  };
};

exports.svgString = svgString;
exports.svgElement = svgElement;
exports.crescentShape = crescentShape;
exports.setAttributeNS = setAttributeNS;
//# sourceMappingURL=index.js.map