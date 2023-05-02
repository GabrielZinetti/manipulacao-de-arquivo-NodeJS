
let fs = require('fs');


fs.readdirSync('./Texto').forEach(file => {
	
	fs.unlink("./Texto/"+file);
});