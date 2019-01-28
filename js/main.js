// cached element references
const search = document.getElementById('search');
const button = document.getElementById('button');
const results = document.getElementById('results');

// event listeners
search.addEventListener('keyup', searchOnEnter);
button.addEventListener('click', bookSearch);

// functions
function searchOnEnter(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
};

function bookSearch() {
  search.value;
  results.innerHTML = '';
  console.log(search.value);
}