const Controller = require('egg').Controller;

class Author extends Controller {
    getAuthorList() {
        const { ctx } = this;
        ctx.body = {
            id: 1,
        },
        ctx.status = 200;
    }
}

module.exports = Author;