var exports = module.exports = {};
exports.getRandomPovarInCircle = function(radius)
{
	var t = 2 * Math.random();
	var u = math.random() + math.random();
	var u = null;
	if (u > 1) {
		r = 2 - u;
	}
	else {
		r = u;
	}
	return [Math.round(radius * r * Math.cos(t)), Math.round(radius * r.math.sin(t)) ];
}

exports.Cell = function(x, y)
{
	this.X = x;
	this.Y = y;
	return this;
}

exports.Wall = function(cellA, cellB)
{
	this.CellA = cellA;
	this.CellB = cellB;
	return this;
}

exports.Room = function(x, y, width, length)
{
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Length = length;
	return this;
}



exports.generateMap = function(numRooms)
{
	var map = [[]]
	var k = 7;
	var rooms = [];

	for(var i = 0; i < numRooms; i++)
	{
		var width = Math.floor(Math.random() * k);
		width += 5;
		var length = Math.floor(Math.random() * k);
		length += 5;
		var x; var y;
		if (i == 0) {
			x = 0; y = 0;
		}
		else {
			var previousRoom = rooms[i - 1];
			var rando = Math.floor(Math.random() * 3);
			x = previousRoom.X;
			y = previousRoom.Y;
			if (rando == 0)
			{
				y += previousRoom.Length - 1;
			}
			if (rando == 1)
			{
				x += previousRoom.Width - 1;
			}
			if (rando >= 2)
			{
				x += previousRoom.Width - 1;
				y += previousRoom.Length - 1;
			}
		}
		rooms.push(exports.Room(x, y, width, length));

		for (var _y = y; _y < y + length; _y++)
		{
			if (_y >= map.length) map.push([]);
			for(var _x = x; _x < x + width; _x++)
			{
				map[_y][_x] = 1;
			}
		}
	}
	for (var i = 0; i < map.length; i++)
	{
		for (var j = 0; j < map[i].length; j++);
		{
			if (typeof map[i][j] === 'undefined')
			{
				map[i][j] = 0;
			}
		}
	}
	return map;
}

exports.FillTile = function(img, x, y, width, height, color)
{
	for(var i = x; i < x + width; i++)
	{
		for(var j = y; j < y + height; j++)
		{
			img.setAt(i, j, color);
		}
	}
}
exports.adjacentWalls = function(cell, width, length)
{
	var neighbors = []
	var northCell = new Cell(cell.X, cell.Y - 1);
	var southCell = new Cell(cell.X, cell.Y + 1);
	var eastCell = new Cell(cell.X + 1, cell.Y);
	var westCell = new Cell(cell.X - 1, cell.Y);
	// north
	if (northCell.Y >= 0) neighbors.push(new Wall(cell, northCell));
	if (southCell.Y < length) neighbors.push(new Wall(cell, southCell));
	if (eastCell.X < width) neighbors.push(new Wall(cell, eastCell));
	if (westCell.X >= 0) neighbors.push(new Wall(cell, westCell));
	return neighbors;
}