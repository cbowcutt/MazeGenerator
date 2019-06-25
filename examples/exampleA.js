var mazeGenerator = require('../src/RoomGenerator');

var argv = process.argv;

var roomCount = argv[2];
var outputFile = argv[3];
var map = mazeGenerator.generateMap(roomCount);
var image = mazeGenerator.imageMapFromAtlas(map, 32, 32);
image.writeImage(outputFile,  (err) => {
	if (err) throw err;
});