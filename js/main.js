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
  callAPI();
}

function callAPI() {
  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search.value,
    dataType: 'json',

    success: function (data) {
      if (data.items === undefined) {
        return;
      } else {
        for (i = 0; i < data.items.length; i++) {
          let dataResults = data.items[i].volumeInfo;
          if (dataResults.authors === undefined && dataResults.thumbnail === undefined) {
            return;
          }
          if (dataResults.publisher === undefined) {
            dataResults.publisher = 'No info';
          }
          results.innerHTML +=
          `<li><a href="${dataResults.infoLink}"><img src="${dataResults.imageLinks.thumbnail}"></a></li>
          <li><a href="${dataResults.infoLink}"><h3>${dataResults.title}</h3></a></li>
          <li>by ${dataResults.authors.toString().replace(/,/g, ', ')}</li>
          <li>Publisher: ${dataResults.publisher}</li>
          <li class="read-more"><a href="${dataResults.infoLink}">READ MORE 📖</a></li>`
        }
      }
      console.log(data);
    },

    type: 'GET'
  });
}