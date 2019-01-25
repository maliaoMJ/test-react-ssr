import express from 'express';
import routes from '../Routes';
import { getStore } from '../store/index';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils'
const app = express();
const store = getStore();
app.use(express.static('public'));
app.use('/api', proxy('192.168.50.33:8000', {
    proxyReqPathResolver: function (req) {
        return '/api' + req.url
    }
}));
app.get('*', function (req, res) {
    const promises = []
    const matchedRoutes = matchRoutes(routes, req.path);
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    });
    Promise.all(promises).then(data => {
        res.send(render(store, routes, req));
    });

})
app.listen(3000)