http://de.wikipedia.org/wiki/Freier_Fall#Fall_mit_Luftwiderstand:_Newton-Reibung
//z = this.m.mz -0.5 *this.m.g *(this.m.t *this.m.t);
test1 = function(h0, t)
{
	g = 9.80665;
	h = h0 -0.5 *g *(t*t);
	return h;
}

test2 = function()
{
}

for(t = 0; t < 10; t+= 0.2){
	console.log(test1(0, t));
}
