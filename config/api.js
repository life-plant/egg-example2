const originData = {
    base: '/api',
    routes: [
        {
            path: '/login',
            actions: [
                {
                    verb: 'post', 
                    controller: 'api.user.login'
                }
            ]
        },
    ]
};

module.exports = {
    apiConf: originData
};