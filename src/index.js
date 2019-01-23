import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from './Routes'
import Home from './components/Home/index.js';
const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    const content = renderToString(<StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter>);
    res.send(
        `<html>
           <head></head>
           <body>
            <div id='root'>
              ${content}
            </div>
           </body>
           <script src='./index.js'></script>
        </html>`
    )
})
app.listen(3000)