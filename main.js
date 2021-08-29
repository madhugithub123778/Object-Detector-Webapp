function setup(){
c1 = createCanvas(600, 550);
c1.center();
myModel = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status_val").innerHTML = "Detecting Objects";
}

img = "";
status = "";
objects = [];
function preload(){
img = loadImage("dog_cat.jpg");

}

function modelLoaded(){
console.log("Model has Loaded");
status = true; 
myModel.detect(img, gotResult);
}

function gotResult(error, results){
 if (error){
 console.error(error);
 }
 else{
console.log(results);
objects = results;
 }

}

function draw(){
image (img, 0, 0,  600, 550);

 if (status != ""){

 for (i=0;i < objects.length;i++){
document.getElementById("status_val").innerHTML = "Object Detected";

objects_name = objects[i].label;
object_accuracy = floor(objects[i].confidence * 100);

fill ("navy");
stroke ("navy");
text (objects_name + " "+ object_accuracy + "%", objects[i].x, objects[i].y);
textSize (18);
noFill();
stroke ("navy");
rect (objects[i].x - 15, objects[i].y-15, objects[i].width, objects[i].height);
strokeWeight(2);
 }


 }

}