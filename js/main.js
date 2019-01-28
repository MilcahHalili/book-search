// cached element references
const search = document.getElementById('search');
const button = document.getElementById('button');
const results = document.getElementById('results');

// event listeners
search.addEventListener('keyup', searchOnEnter);

// functions
function searchOnEnter(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
};