/* 
 *****
  ***
   *
  ***
 *****
 */
 var a = "";	
 var b = "";
 var c = "";
 
for(var z = 0; z < 3; z++) {
	a = '';
	b = '';
	c = '';
	var d = 5 - 2 * z;
	for(var x = 0; x < z; x++) {
		a = a + " ";
		}
	for(x = 0; x < d; x++) {
		b = b + "*";
		}
	for(x = 0; x < z; x++) {
		c = c + " "
		}
	d = a + b + c;
	console.log(d);
	}

for (var q = 1; q < 3; q++) {
	a = '';
	b = '';
	c = '';
	var e = 2 * q + 1;
	for(var y = 2; y > q; y--) {
		a = a + " ";
		}
	for(var u = 0; u < e; u++) { //e = 3, 5
		b = b + "*";
		
		}
	for(y = 2; y > q; y--) {
		c = c + " ";
		}
	f = a + b + c;
	console.log(f);
	}
		