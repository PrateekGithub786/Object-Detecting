img = "";
object = [];
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetecter = ml5.objectDetecter("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetecter.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 600, 400);
    text("Dog", 50, 80);
    stroke("#FF0000");
    noFill();
    rect(30, 60 , 400, 330)

    text("Cat", 50, 80);
    stroke("#FF0000");
    noFill();
    rect(30, 60 , 400, 330)
}