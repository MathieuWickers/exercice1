/**
*@author Wickers Mathieu LPI
*/

/** Multiplie le paramètre a avec b */
function mult(a){
	return function(b){
		return a*b;
	}
}

/** Soustrait le paramètre a à b */
function sub(a) {
	return function(b) {
		return a-b;
	}
}

sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2


/** Additionne n paramètres */
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

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5