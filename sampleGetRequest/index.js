module.exports = function (context, req) {
    let dogs = 100;
    res = {
        body: {ok:true,message:'Enjoy the information', dogs: ++dogs}
    };
    context.done(null, res);    
};
