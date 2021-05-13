/*
Random bounded integer.
*/
function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

/*
  This helper function makes binding the listeners cleaner
*/
function bindMultipleEventListener(element, eventNames, f) {
  eventNames.forEach((eventName) => {
    element.addEventListener(eventName, f);
  });
}

module.exports = {
  randomInteger,
  bindMultipleEventListener
};
