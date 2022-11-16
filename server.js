const express = require('express')
const request = require('request')
const convert = require('xml-js')

const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/skysports', (req, res) => {
    request(
        { url: 'http://www.skysports.com/rss/0,20514,12040,00.xml' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({
                    type: 'error', message:
                        err.message
                })
            }

            let result1 = convert.xml2json(response.body, { compact: false, spaces: 4 });

            res.set('Content-Type', 'application/rss+xml')
            res.send(Buffer.from(body))

            // res.header("Content-Type", 'application/json');
            // res.send(JSON.stringify(result1));


        })
})



app.get('/skysports', (req, res) => {
    (async () => {

        let feed = await parser.parseURL('http://www.skysports.com/rss/0,20514,12040,00.xml');
        console.log(feed.title);

        feed.items.forEach(item => {
            console.log(item.title + ':' + item.link)
        });

    })();
})

app.get('/', function (req, res) {

    res.send('Hello World!')
})
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`listening on ${PORT}`))
