/*
 x(t) = v0 *t *cos(a)
 y(t) = v0 *t *sin(a) - (g /2) *t*t;
*/


compute = function(v, a, t)
{
	hr = v *t *Math.cos(a /180 *Math.PI);
	vr = v *t *Math.sin(a /180 *Math.PI) -(g /2 *t *t);
	console.log(
		"hr:" +hr + "\t"+
		"vr:" +vr + "\t"+
		"v: " +v
	);
	t += 1/fps;
	v -= 1/fps;
	if(0 >= v){ v = 0; }
	if(vr > -5){
		compute(v, a, t);
	}
	else{
		console.log("bounce");
		if(v > 0){
			t = 0;
			compute(v, a, t);
		}
	}
}

v = 100;
a = 89;
t = 0;
fps = 1;

g = 9.80665 /fps;

compute(v, a, t);
