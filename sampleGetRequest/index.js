module.exports = function (context, req) {
    let dogs = 100;
    res = {
        body: {ok:true,message:'have fun with the info ', dogs: ++dogs}
    };
    context.done(null, res);    
};
