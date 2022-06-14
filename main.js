music1 = "";
leftX = 0 ;
leftY = 0;
rightX = 0;
rightY = 0;

function preload(){
    music1 = loadSound('music2.mp3');  
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("modelloadedis initialized");
}
function gotPoses(results){
if(results.length>0){
    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;
    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
}
}
function draw(){
    image(video,0,0,400,400);
}