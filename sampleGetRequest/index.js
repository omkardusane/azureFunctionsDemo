module.exports = function (context, req) {
    let dogs = 100;
    let commons = require('../modules/commons.js');
    //context.log(commons.incr());
    res = {
        body: {ok:true,message:'done!', cats:commons.incr(), dogs: ++dogs}
    };
    context.done(null, res);
};