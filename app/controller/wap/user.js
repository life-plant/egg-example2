const Controller = require('egg').Controller;

class User extends Controller {
    async login() {
        const {ctx, config, app} = this;
        const {pageData} = config;
        console.log(pageData.homeIndex.viewTpl);
        await ctx.render(pageData.userLogin.viewTpl);
    }
}

module.exports = User;