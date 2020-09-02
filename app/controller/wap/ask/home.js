const Controller = require('egg').Controller;

class Home extends Controller {
    async getIndexPage() {
        const {ctx, config, app} = this;
        const {pageData} = config;
        console.log(pageData.homeIndex.viewTpl);
        // ctx.body = config.pageData;
        // ctx.body = await ctx.renderString('{{ user }} {{config.pageData}}', { user: 'popomore', config});
        await ctx.render(pageData.homeIndex.viewTpl);
    }
}

module.exports = Home;