const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  console.log(body);

  body.addEventListener('keydown', onKeyDown(e))
}

init();

let index = 0;
function onKeyDown(e)
{
  const key = parseInt(e.detail || e.which);
  console.log(key);
  
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

/*
// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
*/
