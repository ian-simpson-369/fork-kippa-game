let robot_x
let robot_y
let count = 0
let yellow_ball_x = 250
let yellow_ball_y = 0

function setup()
{
	//create a canvas for the robot
	createCanvas(1200, 750);
	
	
	
	
}

function draw()
{   
	if(count%2===0){yellow_ball_x = 200}
	else if (count%3===1){yellow_ball_x=400}
	else if(count%5===0){yellow_ball_x=600}
	
	else{yellow_ball_x=850}
	robot_x = mouseX;
	robot_y = 275;
	background(255);
	strokeWeight(6);
	fill("blue")
	textSize(30)
	stroke(122)
	strokeWeight(7)
	text('put on your kippa',25,40)
	fill("orange")
	text('score:'+count,25,80)
	fill("green")
	text('move with the mouse',25,160)
	//robots head
	fill(225,190,175);
	rect(robot_x, robot_y, 300, 350, 100);

	
	//hair
	
	fill(190,155,140);
	let purple_catcher_x = robot_x+110
	let purple_catcher_y = robot_y-20
	rect(purple_catcher_x, purple_catcher_y, 120, 30);

	

	//robots eyes
	fill(255);

	ellipse(robot_x + 75, robot_y + 100, 80, 40);
	fill(0)
	ellipse(robot_x + 75, robot_y + 100, 40, 30);

	fill(255)
	ellipse(robot_x + 225, robot_y + 100, 80, 40);
	fill(0)
	ellipse(robot_x + 225, robot_y + 100, 40, 30);


	//nose
	fill(225, 170, 150);
	triangle(robot_x + 150, robot_y + 120,
		robot_x + 100, robot_y + 200,
		robot_x + 200, robot_y + 200);


	//peyot
	fill(190,155,140);
	rect(robot_x - 20, robot_y + 80, 30, 300);

	rect(robot_x + 290, robot_y + 80, 30, 300);

	//mouth
	fill(255);
	rect(robot_x + 50, robot_y + 240,200,50,500);
	triangle(robot_x + 70, robot_y + 240,robot_x + 30, robot_y + 240, robot_x + 50, robot_y + 270)
	triangle(robot_x + 235, robot_y + 240, robot_x+265, robot_y + 240, robot_x+250, robot_y+270)
	line(robot_x+ 90, robot_y +240, robot_x+ 90, robot_y + 290)
	line(robot_x+ 130, robot_y +240, robot_x+ 130, robot_y + 290)
	line(robot_x+ 170, robot_y +240, robot_x+ 170, robot_y + 290)
	line(robot_x+ 210, robot_y +240, robot_x+ 210, robot_y + 290)

	fill(0);
	ellipse(yellow_ball_x, yellow_ball_y, 325, 75);
	yellow_ball_y+=2 +count*0.2
	
	if(yellow_ball_y>500){yellow_ball_y=0
		robot_x = width
	}
	
	
	if((yellow_ball_y>purple_catcher_y-30&&yellow_ball_y<purple_catcher_y+10) && (yellow_ball_x<purple_catcher_x+140&&yellow_ball_x>purple_catcher_x-10)){count++
		yellow_ball_y=0
	robot_x = width
	}
}

function keyPressed()
{
	robot_x-=100;
}