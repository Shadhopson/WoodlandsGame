file_string = `bat1.png
bird1.png
chipmunk1.png
deer1.png
deer2.png
frog1.png
owl1.png
possum1.png
rabbit1.png
racoon1.png
squirrel1.png
squirrel2.png`;

locations_dict = {
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
var debugging = false;
current_animal = 0;
file_list = file_string.split("\n");
console.log(file_list);
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
       name=  file_list[i].match(/[a-zA-Z]+/g)[0];
       console.log(name);
       description = animals[name].info;
       loc = locations_dict[fileName];
       photo = new Photo(name, fileName, loc, description)
       photo.file = loadImage("pictures/"+photo.image)
       //console.log(photo.fileName)
       photos.push(photo)
     }
     console.log(file_dict)

  //console.log(photos)
	logo = loadImage("logo.png");
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
  //console.log("hi")
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
  //console.log(left);
  //console.log(pos,left,right, topp, pos[2], bottom)
  rect(img_x + left*imgwidth, img_y + topp*imgheight, right*imgwidth - left*imgwidth, bottom*imgheight-topp*imgheight);
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
    textSize(textBoxHeight/3);
    text(photos[current_animal].description,img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
    console.log(photos[current_animal].name)
  }
  else{
  textSize(textBoxHeight/1.5);
  text("Can you find the "+ photos[current_animal].name+ "?",img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
  console.log(photos[current_animal].name)
}
  image(photos[current_animal].file, img_x,img_y, imgwidth, imgheight);
  fill(255);
  //here
  if(debugging){
    textSize(15);
    text(precise(((mouseX -img_x)/imgwidth)) + ", " + precise((mouseY -img_y)/imgheight), mouseX, mouseY)
  }
  noFill();
  //rect(img_x + 0.387*imgwidth, img_y + 0.065*imgheight, 0.777*imgwidth - 0.385*imgwidth, 0.303*imgheight-0.065*imgheight);
if(answered){
  drawBox(photos[current_animal].location)
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
