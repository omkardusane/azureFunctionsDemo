module.exports = function (context, req) {
    let dogs = 100;
    let commons = require('../modules/commons.js');
    //context.log(commons.incr());
    res = {
        body: {ok:true,message:'done!', cats:commons.incr(), dogs: ++dogs}
    };
    context.done(null, res);    
};

/**
 * Responses from the calls
 * 1.   {
          "ok": true,
          "message": "done!",
          "cats": 101,
          "dogs": 101
        }
 * 
 * 2.   {
          "ok": true,
          "message": "done!",
          "cats": 102,
          "dogs": 101
        }
 * 
 * 3.   {
          "ok": true,
          "message": "done!",
          "cats": 103,
          "dogs": 101
        }
 *
 *  
 */