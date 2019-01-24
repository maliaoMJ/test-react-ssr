import express from 'express';
import routes from '../Routes';
import { getStore } from '../store/index';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils'
const app = express();
const store = getStore();
app.use(express.static('public'));
app.use('/app', proxy('http://rap2api.taobao.org', {
    proxyReqPathResolver: function (req) {
        console.log(req.url)
        return '/app' + req.url
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