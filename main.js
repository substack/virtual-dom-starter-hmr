var h = require('virtual-dom/h')
var main = require('main-loop')
var ud = require('ud')

var render = ud.defn(module, function render (state) {
  return h('div', [
    h('h1', 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ])
  function onclick () {
    loop.update({ n: state.n + 1 })
  }
})

var loop = ud.defonce(module, function () {
  var loop = main({ n: 0 }, render, require('virtual-dom'))
  document.querySelector('#content').appendChild(loop.target)
  return loop
})
loop.update(loop.state)
