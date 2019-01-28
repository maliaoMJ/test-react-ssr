import express from 'express';
import routes from '../Routes';
import { getStore } from '../store/index';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils'
const app = express();
app.use(express.static('public'));
app.use('/api', proxy('192.168.50.33:8000', {
    proxyReqPathResolver: function (req) {
        return '/api' + req.url
    }
}));
app.get('*', function (req, res) {
    const store = getStore(req);
    const promises = []
    const matchedRoutes = matchRoutes(routes, req.path);
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            })
            promises.push(promise)
        }
    });
    Promise.all(promises).then(data => {
        const context = {};
        const html = render(store, routes, req, context);
        console.log(context);
        if (context.action === 'REPLACE') {
            res.redirect(301, context.url)
        }
        else if (context.NO_FOUND) {
            res.status(404);
            res.send(html);
        } else {
            res.send(html)
        }
    });

})
app.listen(3000)