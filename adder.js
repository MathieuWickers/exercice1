function adder(a, b){
	return function(v){
		return a(v) + b(v);
	}
}

function mult(a){
	return function(b){
		return a*b;
	}
}

function sub(a) {
	return function(b) {
		return a-b;
	}
}

function adder(){
	var args = Array.prototype.slice.call(arguments);
	return function(v){
		var result=0;
		args.forEach(function(val){
			result+=val(v);
		});
		return result;
	}
}