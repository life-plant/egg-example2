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
        pageData
    }
}