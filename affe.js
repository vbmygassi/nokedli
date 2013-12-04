/*
 x(t) = v0 *t *cos(a)
 y(t) = v0 *t *sin(a) - (g /2) *t*t;
*/

g = 9.80665;

compute = function(v, a, t)
{
	hr = v *t *Math.cos(a /180 *Math.PI);
	vr = v *t *Math.sin(a /180 *Math.PI) -(g /2 *t *t);
	console.log("hr:" +parseInt(hr) +":vr:" +parseInt(vr) +":v:" +v);
	t++;
	// t+= 1/30;
	v -= 0.1;
	if(0 >= v){
		v = 0;
	}
	if(-5 < vr){
		compute(v, a, t);
	}
}

v = 200;
a = 45;
t = 0;

compute(v, a, t);
