var car = {
  orientation: 'east',
  carOn: false,
  xCoordinates: 0,
  yCoordinates: 0
};

var $car = document.querySelector('.car');

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {

  if (event.key === 'ArrowUp') {
    car.orientation = 'north';
  } else if (event.key === 'ArrowRight') {
    car.orientation = 'east';
  } else if (event.key === 'ArrowLeft') {
    car.orientation = 'west';
  } else if (event.key === 'ArrowDown') {
    car.orientation = 'south';
  }

  $car.className = 'car ' + car.orientation;
}

var intervalID;

function startCar() {
  intervalID = setInterval(moveCar, 16);
  function moveCar() {
    car.xCoordinates += 10;
    $car.style.left = car.xCoordinates + 'px';
  }
  car.carOn = true;
}

function stopCar() {
  clearInterval(intervalID);
  car.carOn = false;
}

document.addEventListener('keydown', function (event) {
  if (event.key !== ' ') {
    return;
  }
  if (car.carOn === false) {
    startCar();
  } else {
    stopCar();
  }
}

);
