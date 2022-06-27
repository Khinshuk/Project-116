noseX="";
noseY="";

function preload(){
mustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas= createCanvas(400,400);
canvas.center();
video= createCapture(VIDEO);
video.size(400,400);
video.hide()

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,400);
image(mustache, noseX, noseY, 70, 70);
}

function take_snapshot(){
    save('pic.png');
}

function gotPoses(results){
    if(results.length>0){
    noseX=results[0].pose.nose.x-35;
    noseY=results[0].pose.nose.y;
    console.log('noseX= '+results[0].pose.nose.x);
    console.log('noseY= '+results[0.].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('poseNet is initialized');
}