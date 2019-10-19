const React = require('react')
const ReactDOM = require('react-dom/server')
const { Ripple } = require('react_ui_components')
const express = require('express')
const app = express()

const port = 3000

app.get('*', function (req, res) {
  const el = React.createElement(Ripple)
  const html = ReactDOM.renderToString(el)

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${html}
  </body>
  </html>`)
})

app.listen(port, () => console.log('Listening on port 3000'))
