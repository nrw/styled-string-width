
module.exports = measureWidth

function measureWidth (str, current) {
  if (!str) return 0

  var span, width, currentStyle

  span = document.createElement('span')

  span.innerText = str
  span.style = '' +
    'position: absolute;' +
    'top: -99999;' +
    'left: -99999;' +
    'width: auto;' +
    'padding: 0;' +
    'white-space: pre;'

  if (typeof current === 'string') {
    current = document.querySelector(current)
  }

  currentStyle = window.getComputedStyle(current, null)

  if (currentStyle) {
    var toCopy = [
      'letterSpacing',
      'fontSize',
      'fontFamily',
      'fontWeight',
      'textTransform'
    ]

    toCopy.forEach(function (one) {
      if (currentStyle[one] !== undefined) {
        span.style[one] = currentStyle[one]
      }
    })
  }

  document.body.appendChild(span)
  width = span.offsetWidth
  span.remove()

  return width
}
