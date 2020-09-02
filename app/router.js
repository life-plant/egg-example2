'use strict';

const page = require('../config/page');
const api = require('../config/api');

const pageConf = page.pageConf;
const pageData = page.pageData;
const apiConf = api.apiConf;

function autoRoute(app, conf) {
    const baseMiddlewares = conf.middlewares || [];
    const baseUrl = (conf.base === '/' || !conf.base) ? '' : conf.base;

    for (let pathItem of conf.routes) {
        if (!pathItem.isManual) {
            const pathMiddlewares = pathItem.middlewares || [];
            const path = pathItem.path;

            if (!path) return;

            for (let route of pathItem.actions) {
                const routeMiddlewares = route.middlewares || [];

                setRoute({
                    app,
                    verb: route.verb,
                    path: (typeof baseUrl === 'string' && typeof path === 'string') ? `${baseUrl}${path}` : path, // path是字符串才会拼上base，正则path不会拼上base
                    middlewares: [...baseMiddlewares, ...pathMiddlewares, ...routeMiddlewares],
                    controller: route.controller
                });
            }
        }
    }
}

function setRoute({app, verb = 'get', path, middlewares, controller}) {
    const {router} = app;

    middlewares = middlewares.map(item => {
        if (typeof item === 'string') {
            const result = getTargetFunc(app.middlewares, item);

            if (typeof result === 'function') {
                return result();
            }
        }

        return null;
    }).filter(item => typeof item === 'function');

    controller = getTargetFunc(app.controller, controller);

    router[verb](path, ...middlewares, controller)
}

function getTargetFunc(obj, locator) {
    let keys = locator.split('.');
    let result = obj;

    try {
        keys.forEach((k) => {
            result = result[k];
        });
    } catch (err) {
        console.log(err);
        return null;
    }

    return typeof result === 'function' ? result : null;
}

module.exports = app => {

    autoRoute(app, pageConf);
    autoRoute(app, apiConf);

    // 404
    setRoute({
        app,
        verb: pageData.notFound.verb,
        path: pageData.notFound.path,
        middlewares: pageData.notFound.middlewares,
        controller: pageData.notFound.controller
    });
};
