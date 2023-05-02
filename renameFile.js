
let fs = require('fs');

let count = 0;
let files = [];


fs.readdirSync('./Texto').forEach(file => {
	files.push(file);
	console.log(file);
});

files.forEach(function(item, index){
	
	fs.renameSync('./Texto/'+item, './Texto/'+index+'.txt', function(err){
		if(err){
			
			throw err;	
		}else{
			count++;	
		}
	});
});
