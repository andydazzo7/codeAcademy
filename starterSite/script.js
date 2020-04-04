let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
currentlyPlaying = true;
function startRound(){
  doorImage1.src=closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true; 
  randomChoreDoorGenerator();
}
function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }
  return false;
}

function gameOver(status){
   if(status === 'win'){
     startButton.innerHTML = 'You Win!';
   }
   else{
     startButton.innerHTML = "You lose!"
   }
   currentlyPlaying = false;
}
function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
}
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}

function randomChoreDoorGenerator(){
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0)
  {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if(choreDoor === 1)
  {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if(choreDoor === 2)
  {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}
 doorImage1.onclick = function(){
   if(!isClicked(doorImage1) && currentlyPlaying){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
   }
};
doorImage2.onclick = function(){
  if(!isClicked(doorImage2)&& currentlyPlaying){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};
doorImage3.onclick = function(){
  if(!isClicked(doorImage3)&& currentlyPlaying){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
};
startButton.onclick = function(){
  if(!currentlyPlaying){
  startRound();}
}
startRound();