import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  const cssStr = context.css.length ? context.css.join("\n") : "";
  return `
         <html>
           <head>
             ${helmet.title.toString()}
             ${helmet.meta.toString()}
           </head>
           <style>${cssStr}</style>
           <body>
             <div id="root">${content}</div>
           </body>
           <script>window.context = {state: ${JSON.stringify(
             store.getState()
           )}}</script>
           <script src='./index.js'></script>
         </html>
     `;
};
