
var canvas = new fabric.Canvas('myCanvas');

halo_x = 10;
halo_y = 10;

block_image_width = 30;
block_image_height = 30;

var halo_object= "";
var block_image_object= "";

function halo_update()
{
	fabric.Image.fromURL("halo.jpg", function(Img) {
	halo_object = Img;

	halo_object.scaleToWidth(150);
	halo_object.scaleToHeight(140);
	halo_object.set({
	top:halo_y,
	left:halo_x
	});
	canvas.add(halo_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:halo_y,
	left:halo_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '65')
{
	console.log("Se presiona a y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '82')
	{
		new_image('wall.jpg'); 
		console.log("r");
	}
	if(keyPressed == '80')
	{
		new_image('ground.png'); 
		console.log("p");
	}
	if(keyPressed == '72')
	{
		new_image('light_green.png'); 
		console.log("h");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '70')
	{
		new_image('roof.jpg'); 
		console.log("f");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '86')
	{
		new_image('dark_green.png'); 
		console.log("v");
	}
	if(keyPressed == '71')
	{
		new_image('unique.png'); 
		console.log("g");
	}
	if(keyPressed == '74')
	{
		new_image('cloud.jpg'); 
		console.log("j");
	}
	if(keyPressed == '74')
	{
		new_image('dragon.jpg'); 
		console.log("u");
	}
	if(keyPressed == '73')
	{
		new_image('cuadro.png'); 
		console.log("i");
	}
	if(keyPressed == '79')
	{
		new_image('doverman.png'); 
		console.log("o");
	}
	
}
function up()
{
	if(halo_y >=0)
	{
		halo_y = halo_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + halo_x + " , Y = "+halo_y);
		canvas.remove(halo_object);
		halo_update();
	}
}

function down()
{
	if(halo_y <=500)
	{
		halo_y = halo_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + halo_x + " , Y = "+halo_y);
		canvas.remove(halo_object);
	halo_update();
	}
}

function left()
{
	if(halo_x >0)
	{
		halo_x = halo_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + halo_x + " , Y = "+halo_y);
		canvas.remove(halo_object);
		halo_update();
	}
}

function right()
{
	if(halo_x <=850)
	{
		halo_x = halo_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + halo_x + " , Y = "+halo_y);
		canvas.remove(halo_object);
		halo_update();
	}
}
