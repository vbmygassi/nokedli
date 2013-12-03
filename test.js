http://de.wikipedia.org/wiki/Freier_Fall#Fall_mit_Luftwiderstand:_Newton-Reibung

test = function(h0, t)
{
	g = 9.80665;
	h = h0 -0.5 *g *(t*t);
	return h;
}

for(t = 0; t < 10; t+= 0.2){
	console.log(test(0, t));
}
