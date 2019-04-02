process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdin.write('Quitting app!\n');
				process.exit();
				break;
			case '/nodeversion':
				console.log('Your node version is ' + process.versions.node);
			case '/lang':
				console.log('Your os language is ' + process.env.lang);
		}
	}
});