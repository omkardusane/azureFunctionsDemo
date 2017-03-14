let commons = function(){
	let state  = 11;
	let changeState = function(){
		state++;
	};
	let getState = function(){
		return state ;
	}
}
module.exports = commons();
