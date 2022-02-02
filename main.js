var car = {
  orientation: 'east'
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
