var fs = require('fs');
var browserify = require('browserify');
browserify('./src/RoomGenerator.js').bundle((err, buf) =>
{
	if (err)
	{
		throw err;
	}
	fs.writeFile('./build/RoomGenerator.js', buf, (err) =>
	{
		if (err)
		{
			throw err;
		}
	})
});