file_string = `bat2.jpg
bat3.jpg
bear1.jpg
bear2.jpg
bear3.jpg
bear4.jpg
beaver1.jpg
beaver2.jpg
bobcat1.jpg
bobcat2.jpg
bobcat3.jpg
chipmunk1.png
cougar1.jpg
cougar2.jpg
cougar3.jpg
coyote1.jpg
coyote2.jpg
coyote3.jpg
coyote4.jpg
deer1.jpg
frog1.png
grey fox1.jpg
grey fox2.jpg
marten1.jpg
marten2.jpg
mink1.png
mink2.jpeg
mink2.jpg
moose1.JPG
moose2.jpg
moose3.jpg
moose4.jpg
muskrat.jpg
muskrat1.jpg
muskrat2.JPG
muskrat3.jpg
otter1.jpg
otter2.JPG
otter3.jpg
owl1.png
porcupine2.jpg
possum1.png
rabbit1.png
raccoon1.jpg
raccoon2.jpg
raccoon3.jpg
red fox1.jpg
squirrel1.png
squirrel2.png
weasel1.jpg
weasel2.jpg
weasel3.jpg
woodrat1.JPG
woodrat2.jpg`;

locations_dict = {
  "bat2.jpg":[0.3,0.7,0.25,0.74],
  "bat3.jpg":[0.44,0.72,0.26,0.75],
  "bear1.jpg":[0.38,0.6,0.39,0.67],
  "bear2.jpg":[0.54,0.72,0.3,0.9],
  "bear3.jpg":[0.45,0.51,0.42,0.57],
  "bear4.jpg":[0.5,0.77,0.43,0.85],
  "beaver1.jpg":[0.4,0.9,0.25,0.91],
  "beaver2.jpg":[0.33,0.95,0.4,0.56],
  "bobcat1.jpg":[0.48,0.64,0.21,0.74],
  "bobcat2.jpg":[0.38, 0.78,0.43,0.74],
  "bobcat3.jpg":[0.19,0.37,0.59,0.75],
  "cougar1.jpg":[0.39,0.57,0.4,0.53],
  "cougar2.jpg":[0.18,0.48,0.37,0.58],
  "cougar3.jpg":[0.21,0.9,0.16,0.97],
  "coyote1.jpg":[0.57,0.99,0.16,0.96],
  "coyote2.jpg":[0.78,0.91,0.68,0.85],
  "coyote3.jpg":[0.23,0.43,0.15,0.43],
  "coyote4.jpg":[0.58,0.73,0.59,0.89],
  "deer1.jpg":[0.4,0.55,0.26,0.99],
  "grey fox1.jpg":[0.32,0.93,0.19,0.64],
  "grey fox2.jpg":[0.26,0.51,0.47,0.78],
  "marten1.jpg":[0.17,0.34,0.33,0.9],
  "marten2.jpg":[0.08,0.8,0.27,0.6],
  "mink1.png":[0.42,0.82,0.41,0.8],
  "mink2.jpeg":[0.42,0.65,0.25,0.69],
  "mink2.jpg":[0.05,0.52,0.43,0.73],
  "moose1.JPG":[0.41,0.58,0.4,0.6],
  "moose2.jpg":[0.52,0.72,0.4,0.67],
  "moose3.jpg":[0.64,0.73,0.48,0.65],
  "moose4.jpg":[0.13,0.94,0.05,0.85],
  "muskrat.jpg":[0.37,0.63,0.4,0.7],
  "muskrat1.jpg":[0.25,0.68,0.5,0.68],
  "muskrat2.JPG":[0.48,0.57,0.53,0.64],
  "muskrat3.jpg":[0.57,0.93,0.37,0.86],
  "otter1.jpg":[0.19,0.57,0.43,0.7],
  "otter2.JPG":[0.4,0.55,0.38,0.62],
  "otter3.jpg":[0.19,0.48,0.43,0.61],
  "porcupine2.jpg":[0.4,0.61,0.35,0.62],
  "raccoon1.jpg":[0.25,0.45,0.44,0.88],
  "raccoon2.jpg":[0.12,0.24,0.41,0.8],
  "raccoon3.jpg":[0.37,0.66,0.36,0.71],
  "red fox1.jpg":[0.3,0.9,0.37,0.83],
  "weasel1.jpg":[0.27,0.47,0.38,0.77],
  "weasel2.jpg":[0.54,0.86,0.25,0.56],
  "weasel3.jpg":[0.28,0.42,0.33,0.75],
  "woodrat1.JPG":[0.69,0.99,0.33,0.72],
  "woodrat2.jpg":[0.08,0.38,0.35,0.82],
  "bat1.png": [0.356,0.725, 0.05, 0.9],
  "bird1.png": [0.2,0.53, 0.52, 0.8],
  "chipmunk1.png": [0.4,0.54,0.44,0.64],
  "deer1.png": [0.044,0.94, 0.131,0.76],
  "deer2.png": [0.15,0.43,0.37,0.765],
  "frog1.png": [0.36,0.65,0.25, 0.72],
  "owl1.png": [0.55, 0.625,0.53, 0.75],
  "possum1.png": [0.34, 0.85,0.375,0.67],
  "rabbit1.png": [0.38, 0.46,0.34, 0.5],
  "racoon1.png": [0.44, 0.67,0.11, 0.56],
  "squirrel1.png": [0.41, 0.78,0.37, 0.75],
  "squirrel2.png": [0.46,0.82,0.15,0.52],
  "squirrel3.png":[0.387,0.77,0.065,0.303]
}
var debugging = true;
current_animal = 0;
file_list = file_string.split("\n");
var screenWidth = window.innerWidth;
var  screenHeight = window.innerHeight;//650;

class rect_info {
	constructor(left, right, top, bottom){
  	this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}
class Animal {
	constructor(name){
		this.name = name;
		this.info = "";
	  this.photos = [];
	}
}

class Photo {
  constructor(name, image, location, description){
    this.name = name;
    this.image = image;
    this.location = location;
    this.description = description;
    this.file = "";
  }
}

squirrel =  new Animal("squirrel");
owl = new Animal("owl")
rabbit = new Animal("rabbit")
chipmunk = new Animal("chipmunk")
racoon = new Animal("racoon")
possum = new Animal("possum")
frog = new Animal("frog")
deer = new Animal("deer")
bird = new Animal("bird")
bat = new Animal("bat");
bat.info = "Bats are nocturnal. So they sleep in the day and are awake at night!"
bird.info = "Birds"
var locations = [new rect_info(20,20,20,20)];

var animals = {"squirrel":squirrel, "owl": owl, "rabbit": rabbit,"chipmunk":chipmunk,
 "racoon":racoon, "possum":possum, "frog":frog,"deer":deer, "bird":bird, "bat":bat};
function setup() {
  photos = [];
    //for ( key in animals){
        // var name = animals[key].name;
         //for (i = 1; i < 3; i++){
        //     animals[key].photos.push(loadImage("pictures/" + name + i + ".png"))
        // }
     //}
     file_dict = {}
     for (var i = 0; i < file_list.length; i++){
       fileName = file_list[i];
       file_dict[fileName] = []
       name=  file_list[i].match(/[a-zA-Z ]+/g)[0];
       description = "";//animals[name].info;
       loc = locations_dict[fileName];
       photo = new Photo(name, fileName, loc, description)
       photo.file = loadImage("pictures/"+photo.image)
       photos.push(photo)
     }

	logo = loadImage("logoclear.png");
//	goodEndImg = loadImage("pictures/birdgoodend.png")
//	badEndImg = loadImage("pictures/birdbadend.png")
  var cnv = createCanvas(window.innerWidth, window.innerHeight);//650);
  var cx = (windowWidth - window.innerWidth) / 2;
  var cy = (windowHeight -window.innerHeight) /2;
  cnv.position(cx,cy);
}

//var imageSize = 400;
var imgwidth = screenWidth;
var imgheight = screenHeight *9/10;
var textBoxHeight = screenHeight/10;
var img_x =  screenWidth/2 - imgwidth/2;
var img_y = screenHeight*0.1//screenHeight/2 - imgheight/2;

function precise(x){
  return Number.parseFloat(x).toPrecision(3);
}
function inBox(){
  pos = photos[current_animal].location
  left = pos[0];
  right = pos[1];
  topp = pos[2];
  bottom = pos[3];
  adaptedMouseX = (mouseX -img_x)/imgwidth;
  adaptedMouseY =(mouseY -img_y)/imgheight
  if (adaptedMouseX > left && adaptedMouseX < right && adaptedMouseY > topp && adaptedMouseY< bottom){
    return true;
  }
  else{
    return false;
  }
}

function drawBox(pos){
  left = pos[0];
  right = pos[1];
  topp = pos[2];
  bottom = pos[3];
  rect(img_x + left*imgwidth, img_y + topp*imgheight, right*imgwidth - left*imgwidth, bottom*imgheight-topp*imgheight, 20);
}
var answered = false;
next_box = {"left":8/10*imgwidth,"top":19/20*imgheight, "width":1.8/10*imgwidth, "height":1/10*imgheight};
function draw(){
  fill(3,22,52);
  rect(img_x, 0, imgwidth, textBoxHeight);
  image(logo, img_x+imgwidth/50,textBoxHeight/20,imgwidth/7, textBoxHeight*13/15)
  fill(255);
  textAlign(CENTER, CENTER)
  if (answered){
    textSize(textBoxHeight/1.5);
    text("That's the " + photos[current_animal].name+"! Awesome job!",img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
  }
  else{
  textSize(textBoxHeight/1.5);
  text("Can you find the "+ photos[current_animal].name+ "?",img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
}
  image(photos[current_animal].file, img_x,img_y, imgwidth, imgheight);
  fill(255);
  //here
  if(debugging){
    textSize(15);
    text(precise(((mouseX -img_x)/imgwidth)) + ", " + precise((mouseY -img_y)/imgheight), mouseX, mouseY)
  }
  //noFill();
  //rect(img_x + 0.387*imgwidth, img_y + 0.065*imgheight, 0.777*imgwidth - 0.385*imgwidth, 0.303*imgheight-0.065*imgheight);
if(answered){
  noStroke();
  //noFill();
  //stroke(124,252,0,30);
  //stroke(255,252,255,30);
  //strokeWeight(50);
  fill(124,252,0,75)
  x = photos[current_animal].location[0];
  y= photos[current_animal].location[2];
  x2 = photos[current_animal].location[1];
  y2= photos[current_animal].location[3];
  //rect(0,0, x, imgheight);
  drawBox([0,0,x,1]);
  drawBox(photos[current_animal].location)
  stroke(255);
  strokeWeight(1);
}
//  drawBox(0.387,0.77,0.065,0.303 );
  if(answered){
    fill(3,22,52);
    rect(next_box['left'],next_box['top'], next_box['width'], next_box['height'], 10);
    fill(255);
    textSize(textBoxHeight/4)
    textAlign(LEFT, TOP)
    stroke(255);
    text("Nice Work! Keep Going?",8.1/10*imgwidth,19.5/20*imgheight)
  }

}

function mousePressed(){
  //current_animal+=1;
  if (answered == false){
    if(inBox()){
      answered = true;
  //current_animal +=1;
  //if (current_animal >= file_list.length){
  //  current_animal = 0;
  //}
    }
  }
else{
  if(mouseX > next_box['left'] && mouseX < next_box['left'] + next_box['width'] &&
      mouseY > next_box['top'] && mouseY < next_box['top'] + next_box['height']){
        answered = false;
        current_animal +=1;
        if (current_animal >= file_list.length){
          current_animal = 0;
        }
      }
}
return false;

}
