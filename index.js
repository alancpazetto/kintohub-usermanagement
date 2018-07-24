const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'


/**
 * @api {get} /sample/{message} hello world sample request
 * @apiName GetSample
 * @apiParam (Url) {String} message the message to return
 * @apiSuccess (Success_200) {String} data the hello world data
 * @apiSuccess (Success_200) {String} output what the user entered in the url
 */
app.get('/sample/:message', (req, res) =>
  res.send({
    data: 'Hello World',
    output: req.params.message
  })
);


/**
 * @api {get} /sample/randim hello world sample request
 * @apiName GetSample
 * @apiSuccess (Success_200) {String} data the hello world data
 * @apiSuccess (Success_200) {String} output what the user entered in the url
 */
app.get('/sample/random', (req, res) =>
  res.send({
    data: 'Hello World',
    output: Math.random()
  })
)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
