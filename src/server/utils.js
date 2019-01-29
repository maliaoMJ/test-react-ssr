import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const cssStr = context.css.length ? context.css.join("\n") : "";
  return `
         <html>
           <head></head>
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
