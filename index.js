function parallaxDebug () {


  var el = document.createElement('div')
  el.style.position = 'fixed'
  el.style.top = 0
  el.style.left = 0
  el.style.width = '100px'
  el.style.padding = '3px'
  el.style.fontFamily = 'helvetica, arial, sans-serif'
  el.style.background = '#aaa'
  el.style.color = '#224'
  el.style.textAlign = 'center'
  el.textContent = '-'
  document.body.appendChild(el)

  var depth = 0

  window.addEventListener('scroll', updateDepth)
  updateDepth()

  function updateDepth() {
    depth = document.body.scrollTop
  }

  function draw() {
    el.textContent = depth
    window.requestAnimationFrame(draw)
  }
  draw()

}

module.exports = parallaxDebug