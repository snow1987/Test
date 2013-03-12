var a = "";
var b = "";
var c = "";

for (var z = 1; z <= 5; z++) {
	a = '';
	b = '';
	var d = 5 - z;
	for(var y = 0; y < d; y++) {
	a = a + " ";
	}
	for(y = 0; y < z; y++) {
	b = b + "*";
	}
	c = a + b;
	console.log(c);
	}
	
for (var x = 4; x > 0; x--) {
	a = '';
	b = '';
	var e = 5 - x;
	for(var f = 0; f < e; f++) {
	a = a + " ";
	}
	for(f = 0; f < x; f++) {
	b = b + "*";
	}
	g = a + b;
	console.log(g);
}