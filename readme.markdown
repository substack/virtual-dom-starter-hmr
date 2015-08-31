# virtual-dom-starter-hmr

bare-bones [virtual-dom](https://npmjs.com/package/virtual-dom) starter
using [main-loop](https://npmjs.com/package/main-loop),
[browserify-hmr](https://npmjs.com/package/browserify-hmr) to hot reload
the page,
[browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify),
and [npm run scripts](http://substack.net/task_automation_with_npm_run)

[view the starter demo](http://substack.neocities.org/virtual_dom_starter.html)

# quick start

```
$ npm install
$ npm start
```

# commands

* `npm start` - start a development server with watchify for hot reloading
* `npm run www` - start a development server
* `npm run build` - build js for production
* `npm run watch` - automatically build js on file changes for development

# starter code

``` js
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
```

# contributing

If you like what you see, but want to add something more, fork this repo and add
your additional feature to the name of the fork. Try to be specific with the
name of your fork, listing the technologies used plus what features the fork
adds.

# variations

Check out the [list of forks](https://github.com/substack/virtual-dom-starter/network/members)
to see how other people have customized this starter repo.

# license

This software is released into the public domain.
