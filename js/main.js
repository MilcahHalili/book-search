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
    type: 'GET'
  }).done(function (data) {
    if (data.items === undefined) {
      search.style.borderColor = 'orangered';
      search.value = 'Try again! :D';
    } else {
      search.style.borderColor = '';
      for (i = 0; i < data.items.length; i++) {
        let dataResults = data.items[i].volumeInfo;
        let img = dataResults.imageLinks.thumbnail;
        let title = dataResults.title;
        let authors = dataResults.authors;
        let publisher = dataResults.publisher;
        let url = dataResults.infoLink;
        if (authors === undefined && img === undefined) {
          return;
        }
        if (publisher === undefined) {
          publisher = 'No info';
        }
        results.innerHTML +=
          `<li><a href="${url}"><img src="${img}"></a></li>
          <li><a href="${url}"><h3>${title}</h3></a></li>
          <li>by ${authors.toString().replace(/,/g, ', ')}</li>
          <li>Publisher: ${publisher}</li>
          <li class="read-more"><a href="${url}">READ MORE 📖</a></li>`
      }
    }
  });
}