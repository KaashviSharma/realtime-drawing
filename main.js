nosex = 0;
nosey = 0;
difference = 0;
leftwrist = 0;
rightwrist = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,120);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet Model is initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+",nosey = "+nosey);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist-rightwrist)
        console.log("leftwristx = "+leftwrist+",rightwrist = "+rightwrist+",difference = "+difference);
    }
}

function draw()
{
   background("#eda955");

   document.getElementById("square_side").innerHTML = "width and height of a square will be = "+difference+"px";
   fill("#4287f5");
   stroke("#4287f5");
   square(nosex,nosey,difference);
}