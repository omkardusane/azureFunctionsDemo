module.exports = function (context, req) {
    let dogs = 100;
    let commons = require('../modules/commons.js');
    commons.changeState();
    res = {
        body: {
            ok:true,
            message:'have fun with the info ',
            dogs: ++dogs,
            cats : commons.getState() 
           }
    };
    context.done(null, res);    
};
