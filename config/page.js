const originData = {
    // base: '/page',
    middlewares: ['error-handler'],
    routes: [
        {
            path: '/ask/index',
            actions: [
                {
                    verb: 'get',
                    controller: 'wap.ask.home.getIndexPage',
                    name: 'homeIndex',
                    title: 'homeIndex',
                    viewTpl: 'ask/index',
                },
            ]
        },
        {
            path: '/login',
            actions: [
                {
                    verb: 'get',
                    controller: 'wap.user.login',
                    name: 'userLogin',
                    title: 'userLogin',
                    viewTpl: 'login',
                },
            ]
        },
        {
            isManual: true, // 需要手动配置路由，非自动

            /**
             * 404页面
             */
            path: '*',
            actions: [
                {
                    verb: 'get',
                    controller: 'wap.base.notFound',
                    name: 'notFound',
                    viewTpl: 'not-found'
                }
            ]
        },  
    ],
};

// 提取pageData对象，方便使用，name作为对象属性
const pageData = {};
originData.routes.forEach(route => {
    const routeData = route.actions[0];
    let routeName = routeData.name || route.path;

    pageData[routeName] = {
        ...routeData,
        path: route.path,
        route: route.path,
        verb: routeData.verb || 'get',
        middlewares: [...(originData.middlewares || []), ...(route.middlewares || []), ...(routeData.middlewares || [])]
    }
});

console.log(pageData);

module.exports = {
    pageConf: originData,
    pageData
};