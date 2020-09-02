const originData = {
    base: '/api',
    routes: [
        {
            path: '/getAuthorList',
            actions: [
                {
                    verb: 'get', 
                    controller: 'api.author.getAuthorList'
                }
            ]
        },
    ]
};

module.exports = {
    apiConf: originData
};