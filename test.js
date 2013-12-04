/*
 singlethreaded semaphor test
 	to avoid singlethreaded racing condition
	concurrency fudges
 	[ --- schnelleinschnapps --- ]
 */

ComputerProgram = {
	val: 0,
	q: [],
	proc: setInterval(function(){ ComputerProgram.run() }, 250),
	compute: function(proc, method)
	{
		ComputerProgram.q.push(method);
		console.log("calläy: " +proc +" q-size: " +ComputerProgram.q.length);
	},
	add: function()
	{
		ComputerProgram.val += 1;
		console.log("välü: " +ComputerProgram.val);
	},
	sub: function()
	{
		ComputerProgram.val -= 1;
		console.log("välü: " +ComputerProgram.val);
	},
	run: function()
	{
		if(null != (m = ComputerProgram.q.pop())){
			m();
		}
	},
}

main = function()
{
	cl1 = setInterval(function(){ ComputerProgram.compute("test1", ComputerProgram.add); }, 1013);
	cl2 = setInterval(function(){ ComputerProgram.compute("test2", ComputerProgram.add); }, 1987);
	cl3 = setInterval(function(){ ComputerProgram.compute("test3", ComputerProgram.sub); },  797);
}

main();
