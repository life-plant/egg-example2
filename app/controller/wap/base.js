const Controller = require('egg').Controller;

class Base extends Controller {
    async notFound() {
        const { ctx, config } = this;
        await ctx.render(config.pageData.notFound.viewTpl);
        ctx.status = 404;
    }
}

module.exports = Base;