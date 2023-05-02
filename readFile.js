let fs = require('fs');


fs.readdirSync('./Texto').forEach(file => {
	fs.readFile('./Texto/'+file,'utf8', function(err,data){
		console.log(data);
	});
});