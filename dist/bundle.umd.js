(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react')))
    : typeof define === 'function' && define.amd
    ? define(['react'], factory)
    : ((global = global || self),
      (global['react-ui-components'] = factory(global.React)))
})(this, function(React) {
  'use strict'

  React = React && React.hasOwnProperty('default') ? React['default'] : React

  var index = function index() {
    return React.createElement('div', null, 'Hello I am react')
  }

  return index
})
