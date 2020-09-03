const Controller = require('egg').Controller;
const utility = require("utility")

class User extends Controller {
    register() {
        const { ctx } = this;
        let registerData = ctx.request.body;
    }
    login() {
        const { ctx, app} = this;
        // if (ctx.session.xkey) {

        // }
        // ctx.response = '11';
        // ctx.status = 200;
        
        const userId = ctx.cookie.userId;
        const xkey = ctx.session.xkey;
        if (utility.md5(userId) === xkey) {
            loginSuccess(ctx);
        } else {
            
        }
        console.log('zzz', ctx.request.body);
        
        function loginSuccess(ctx) {
            ctx.body= {
                code: 0,
                data: '',
                msg: '登录成功'
            };
            ctx.status = 200;
        }
    }
    
}

module.exports = User;