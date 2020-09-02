const Controller = require('egg').Controller;

class User extends Controller {
    login() {
        const { ctx, app} = this;
        // if (ctx.session.xkey) {

        // }
        // ctx.response = '11';
        // ctx.status = 200;
        console.log(ctx.query.return_url);
        // app.router.redirect(ctx.query.return_url);
        // app.router.redirect('../', 'ask/index', 403)
    }
}

module.exports = User;