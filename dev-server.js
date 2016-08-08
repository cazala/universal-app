var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var Express = require('express')

var app = new Express()
var port = process.env.PORT || 9999
var compiler = webpack(config)
var dev = webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath })
var hot = webpackHotMiddleware(compiler)

app.use(dev)
app.use(hot)

app.get('*', function (req, res) {
  res.send(`
    <html>
      <head>
        <title>Webpack Development Server</title>
      </head>
      <body>
        <div id="root">Hello World</div>
      </body>
      <script src="/bundle.js" async defer></script>
    </html>
    `)
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
    return
  }
  console.info('Open up http://localhost:%s/ in your browser.', port)
})
