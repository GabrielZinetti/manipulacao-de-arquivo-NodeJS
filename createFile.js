let fs = require('fs');

/* Using the funtion writeFile to create the file
 * we can create file using other function, like writeStream and write too
 * we can create the file by passing a text or a String variable, in the place of "Some Text.."
 */
fs.writeFile("./Texto/text2.txt",'Another text', function(err){
	if(err){
		return console.log('error')
	}
	console.log('File created!');
});