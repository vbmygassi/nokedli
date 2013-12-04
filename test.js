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

test1 = function()
{
	ComputerProgram.compute("test1", ComputerProgram.add);
}

test2 = function()
{
	ComputerProgram.compute("test2", ComputerProgram.add);
}

test3 = function()
{
	ComputerProgram.compute("test3", ComputerProgram.sub);
}

main = function()
{
	cl1 = setInterval(function(){ test1() }, 1013);
	cl2 = setInterval(function(){ test2() }, 1987);
	cl3 = setInterval(function(){ test3() },  797);
}

main();


