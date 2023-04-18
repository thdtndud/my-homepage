/**
 * Bouncing Ball with Vectors 
 * by Daniel Shiffman.  
 * 
 * Demonstration of using vectors to control motion 
 * of a body. This example is not object-oriented
 * See AccelerationWithVectors for an example of how 
 * to simulate motion using vectors in an object.
 */
 
let location1;  // Location of shape
let location2;
let velocity1;  // Velocity of shape
let velocity2;
let gravity1
let gravity2;

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  location2 = createVector(150,150);
  velocity1 = createVector(1.5,2.1);
  velocity2 = createVector(2.1,1.5);
  gravity1 = createVector(0,0.2);
  gravity2 = createVector(0,0.4);

}

 function draw() {
  background(0);
  
  // Add velocity to the location.
  location1.add(velocity1);
  location2.add(velocity2);
  // Add gravity to velocity
  velocity1.add(gravity1);
  velocity2.add(gravity2);
  
  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }
  
  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
   if (location2.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity2.y = velocity2.y * -0.955; 
    location2.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,55,55);
  
   stroke(255);
  strokeWeight(4.5);
  fill(137);
  ellipse(location2.x,location2.y,35,35);
}