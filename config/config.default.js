const path = require('path');
const pageData = require('./page').pageData;

module.exports = (appInfo) => {
    console.log(appInfo.baseDir, [
        path.join(appInfo.baseDir, 'app/view'),
    ].join(','))
    return {
        keys: '123456',
        view: {
            defaultExtension: '.nj',
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.nj': 'nunjucks',
            },
            root: [
                path.join(appInfo.baseDir, 'app/view'),
            ].join(',')
        },
        security: {
            csrf: {
                queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
                bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
                headerName: 'x-csrf-token',
            },
        },
        pageData,
    }
}