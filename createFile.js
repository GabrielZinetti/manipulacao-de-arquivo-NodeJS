let fs = require('fs');

fs.writeFile("./Texto/text2.txt",'Another text', function(err){
	if(err){
		return console.log('error')
	}
	console.log('File created!');
});
