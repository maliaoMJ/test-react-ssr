import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './components/Home/index.js';
const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    const content = renderToString(<Home></Home>);
    res.send(
        `<html>
           <head></head>
           <body>
            <div id='root'>
                <h4>React SSR</h4>
                    ${content}
            </div>
           </body>
           <script src='./index.js'></script>
        </html>`
    )
})
app.listen(3000)