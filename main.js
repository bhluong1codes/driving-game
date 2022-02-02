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

function startCar() {
  setInterval(moveCar, 16);
  function moveCar() {
    car.xCoordinates += 10;
    $car.style.left = car.xCoordinates + 'px';
  }
  car.carOn = true;
}

document.addEventListener('keydown', function (event) {
  if (event.key === ' ' && car.carOn === false) {
    startCar();
  }
});
