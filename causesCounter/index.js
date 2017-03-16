module.exports = function (context, req) {
    let dogs = 100;
    let commmons = require ('../modules/commons.js');
    commmons.changeState();
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
