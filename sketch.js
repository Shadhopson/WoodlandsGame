p5.disableFriendlyErrors = true;
file_string = `bat2.jpg
box turtle1.jpg
deer2.jpg
salamander1.JPG
snake1.jpg
toad1.jpeg
treecreeper1.jpg
treecreeper2.jpg
whip-poor-will1.jpg
woodcock.jpg
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

fact_dict = {
  "box turtle1.jpg":"Box turtles can close their shells.",
  "deer2.jpg":"Deer can see very well at night.",
  "salamander1.JPG":"Salamanders are amphibians!",
  "snake1.jpg":"Snakes swallow their prey whole.",
  "toad1.jpeg":"American toads hibernate underground in winter.",
  "treecreeper1.jpg":"Treecreepers always go up trees, never down.",
  "treecreeper2.jpg":"Treecreepers eat mostly insects.",
  "whip-poor-will1.jpg":"They are crepescular, active at dawn and dusk.",
  "woodcock.jpg":"Woodcocks migrate South in the colder months.",
  "bat2.jpg": "Bats are the only mamals that can fly!",
  "bat3.jpg": "Bats are nocturnal (active at night)",
  "bear1.jpg": "Bears mark trees to communicate with other bears.",
  "bear2.jpg": "Bears are excellent swimmers.",
  "bear3.jpg": "Black bears mostly forage around twilight.",
  "bear4.jpg": "Most of the black bears' diet is vegetation.",
  "beaver1.jpg": "Beavers are the largest living rodent in the world.",
  "beaver2.jpg": "Beavers create dams to make ponds.",
  "bobcat1.jpg": "Bobcats are about twice as big as housecats.",
  "bobcat2.jpg":"Bobcats can leap 10 feet to pounce on prey.",
  "bobcat3.jpg":"Bobcats eat small animals like squirrels and birds.",
  "cougar1.jpg":"They're also called pumas, mountain lions, or panthers.",
  "cougar2.jpg":"Cougars are the biggest cat in North America.",
  "cougar3.jpg":"Cougars mostly hunt deer and other mamals.",
  "coyote1.jpg":"Coyotes hunt at night.",
  "coyote2.jpg":"Coyotes howl to tell other coyotes where they are.",
  "coyote3.jpg":"Coyotes have been spotted in Manhattan before.",
  "coyote4.jpg":"Coyotes mark their territory with their urine.",
  "deer1.jpg":"Male deer grow new antlers every year.",
  "grey fox1.jpg":"Grey foxes have hooked claws for climbing trees.",
  "grey fox2.jpg":"Grey foxes use caves, and hollowed trees as dens.",
  "marten1.jpg":"American Martens can tunnel in snow to find food.",
  "marten2.jpg":"American Martens weigh between 1 and 3 pounds.",
  "mink1.png":"Minks often add grass, or fur to their den for comfort.",
  "mink2.jpeg":"Minks are carnivorous. They only eat meat.",
  "mink2.jpg":"Minks' fur has oil on it that repels water.",
  "moose1.JPG":"Moose are the largest of all deer species.",
  "moose4.jpg":"Moose antlers can spread 6 feet from end to end.",
  "moose2.jpg":"Moose can run up to 35 miles per hour.",
  "moose3.jpg":"Moose are good swimmers, and eat aquatic plants.",
  "muskrat.jpg":"Muskrats live in family groups.",
  "muskrat3.jpg":"Muskrats sometimes live in beaver lodges",
  "muskrat2.JPG":"Muskrats are prey to many animals.",
  "muskrat1.jpg":"Muskrats spend most of their time in the water",
  "otter1.jpg":"Webbed feet make otters great swimmers.",
  "otter2.JPG":"Otter fur traps air, making them more buoyant.",
  "otter3.jpg":"Otters eat about a quarter of their body weight daily.",
  "porcupine2.jpg":"Porcupines' point up their quills when threatened.",
  "raccoon2.jpg":"In winter raccoons sleep more but don't hibernate.",
  "raccoon3.jpg":"Raccoons are nocturnal, they sleep during the day.",
  "red fox1.jpg":"The foxes tail helps it stay balanced.",
  "weasel1.jpg":"Weasels eat about 40% of their body weight daily.",
  "weasel2.jpg":"Weasels are active all year long.",
  "weasel3.jpg":"Long-tailed Weasel's fur changes color in winter.",
  "woodrat1.JPG":"Allegheny Woodrats are mostly vegetarian.",
  "woodrat2.jpg":"Allegheny Woodrats are sadly endangered.",
  "bat1.png": "Bats can use echolocation to see",
  "chipmunk1.png": "Chipmunks can gather up to 165 acorns a day.",
  "frog1.png": "Frogs get water by absorbing it through their skin.",
  "owl1.png": "Owls can turn their heads up to 270 degrees.",
  "possum1.png":"A possum eats over 5000 ticks every tick season.",
  "rabbit1.png": "Rabits are herbivores, eating only plants.",
  "raccoon1.jpg": "Racoons have 5 fingered hands like us!",
  "squirrel1.png":"A squirrel's teeth never stops growing.",
  "squirrel2.png":"Sometimes nuts they bury grow into trees."
}

locations_dict = {
  "box turtle1.jpg":[0.25,0.42,0.28,0.5],
  "deer2.jpg":[0.28,0.4,0.34,0.66],
  "salamander1.JPG":[0.34,0.6,0.23,0.53],
  "snake1.jpg":[0.03,0.6,0.49,0.66],
  "toad1.jpeg":[0.32,0.4,0.44,0.6],
  "treecreeper1.jpg":[0.12,0.36,0.46,0.8],
  "treecreeper2.jpg":[0.57,0.64,0.58,0.81],
  "whip-poor-will1.jpg":[0.18,0.72, 0.16,0.7],
  "woodcock.jpg":[0.42,0.59,0.34,0.57],
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
var debugging = false;
current_animal = 0;
file_list = file_string.split("\n");
var screenWidth = window.innerWidth;
var  screenHeight = window.innerHeight;


class Photo {
  constructor(name, image, location, description){
    this.name = name;
    this.image = image;
    this.location = location;
    this.description = description;
    this.file = "";
  }
}
selected_creatures = [];
for (var i =0; i < 25; i++){
   randnum =Math.floor(Math.random() * (file_list.length-1));
   if (selected_creatures.includes(randnum)){
     i -=1
   }
  else{
    selected_creatures.push(randnum);
  }
}
selected_creatures = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]
console.log(file_list.length)
function setup() {
  photos = [];
     file_dict = {}
     for (var i = 0; i < selected_creatures.length-1; i++){
       k = i;
       console.log(i);
       i = selected_creatures[i];
       fileName = file_list[i];
       file_dict[fileName] = []
       name=  file_list[i].match(/[a-zA-Z- ]+/g)[0];
       description = fact_dict[file_list[i]];
       loc = locations_dict[fileName];
       photo = new Photo(name, fileName, loc, description)
       photo.file = loadImage("pictures/"+photo.image)
       photos.push(photo)
       i = k;
     }

	//logo = loadImage("logoclear.png");
  //console.log(logo);
  var cnv = createCanvas(window.innerWidth, window.innerHeight);//650);
  var cx = (windowWidth - window.innerWidth) / 2;
  var cy = (windowHeight -window.innerHeight) /2;
  cnv.position(cx,cy);
}

var imgwidth = screenWidth;
var imgheight = screenHeight *9/10;
var textBoxHeight = screenHeight/10;
var img_x =  screenWidth/2 - imgwidth/2;
var img_y = screenHeight*0.1;

function precise(x){
  return Number.parseFloat(x).toPrecision(3);
}
function inBox(){
  pos = photos[current_animal].location;
  left = pos[0];
  right = pos[1];
  topp = pos[2];
  bottom = pos[3];
  adaptedMouseX = (mouseX -img_x)/imgwidth;
  adaptedMouseY =(mouseY -img_y)/imgheight;
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
  noStroke();
  rect(img_x, 0, imgwidth, textBoxHeight);
  //image(logo, img_x+imgwidth/50,textBoxHeight/20,imgwidth/7, textBoxHeight*13/15)
  fill(255);
  textAlign(CENTER, CENTER)
  if (answered){
    textSize(textBoxHeight/2);
    text(photos[current_animal].description,img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
    //text("That's the " + photos[current_animal].name+"! Awesome job!",img_x+ imgwidth/2, img_y -  textBoxHeight/3 );
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

if(answered){
  noStroke();
  fill(124,252,0,75)
  x = photos[current_animal].location[0];
  y= photos[current_animal].location[2];
  x2 = photos[current_animal].location[1];
  y2= photos[current_animal].location[3];
  drawBox([0,0,x,1]);
  drawBox(photos[current_animal].location)
  stroke(255);
  strokeWeight(1);
}

  if(answered){
    fill(3,22,52);
    textSize(textBoxHeight/4)
    winText = "Nice Work! Keep Going?"
    if (textWidth(winText)+0.1/10*imgwidth >= next_box['width'] ){
      next_box['width'] = textWidth(winText) + 0.1/10*imgwidth +10;
    }
    rect(next_box['left'],next_box['top'], 180, next_box['height'], 10);
    fill(255);
    //console.log(next_box['width'])
    //textSize(textBoxHeight/4)
    textAlign(LEFT, TOP)
    stroke(255);
    //winText = "Nice Work! Keep Going?"
    text("Nice! Keep Going?",8.1/10*imgwidth,19.5/20*imgheight)
  }

}

function mousePressed(){
  if (answered == false){
    if(inBox()){
      answered = true;
    }
  }
else{
  if(mouseX > next_box['left'] && mouseX < next_box['left'] + next_box['width'] &&
      mouseY > next_box['top'] && mouseY < next_box['top'] + next_box['height']){
        answered = false;
        current_animal +=1;
        if (current_animal >= selected_creatures.length-1){
          current_animal = 0;
        }
        /*if(current_animal >= 24){
          console.log('done');
          current_animal = 0;
          //window.location.reload(true);
        }*/
      }
}
return false;

}
