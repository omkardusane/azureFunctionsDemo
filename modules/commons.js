let commons = function(){
	let state  = 11;
	this.changeState = function(){
		state++;
	};
	this.getState = function(){
		return state ;
	}
}
module.exports = commons();