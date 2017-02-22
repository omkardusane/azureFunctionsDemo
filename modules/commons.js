function commons(){
	let cats = 100;
	this.incr = ()=>{
		cats++;
		return cats ;	
	};
	return this;
}
module.exports = commons();
