var PNGImage = require('pngjs-image');
	
exports.imageMapFromAtlas = function(map, tile_width, tile_length)
{

	var widthCount = Math.max.apply(null, map.map(a => a.length));
	var lengthCount = map.length;
	var image = PNGImage.createImage(widthCount * tile_width, lengthCount * tile_length);
	for (var y = 0; y < lengthCount; y++)
	{
		for(var x = 0; x < widthCount; x++)
		{
			var fillColor = { red: 100, green: 255, blue: 100, alpha: 255};
			if (map[y][x] == 1) fillColor = { red: 0, green: 0, blue: 0, alpha: 255};
			exports.FillTile(image, x * tile_width, y * tile_width, tile_width, tile_length, fillColor); 
		}
	}
	return image;
}