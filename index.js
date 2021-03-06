let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
const galleryContainer = document.querySelector('.main-container')
// const posts = document.querySelectorAll ('.movie-post')
const newElement = document.createElement ('div');
const searchBtn = document.querySelector('.searchBtn')
// const e =  KeyboardEvent"Enter"

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
  // search (data)
}
getData();

function showData(data) {
  const allPosts = data.results.map(post => {
    return `<div class="movie"><img class="movie-post" src="https://image.tmdb.org/t/p/w1280${post.poster_path.replace(',', " " )}" alt="image">
    <div class="movie-info"><h3 class="movie-text">${post.title}</h3><span class="movie-vote">${post.vote_average}</span></div><div class="overview">
    <h3>Overview</h3>${post.overview}</div></div>`
  })
  galleryContainer.insertAdjacentHTML('beforeend', allPosts);
}

searchBtn.addEventListener('click', () => {
  const input = document.querySelector('.search').value
  url = `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
  galleryContainer.innerHTML = ""
})
searchBtn.addEventListener('click', getData)


// function showText(data) {
//   const allTitles = data.results.map(post => {
//     return `<div class="movie-info"><h3 class="movie-text">${post.title}</h3></div>`
//   })
//   galleryContainer.insertAdjacentHTML('beforeend', allTitles);
// }

console.log (e)


