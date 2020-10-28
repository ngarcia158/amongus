let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
    
    document.querySelector('.title1').innerHTML = data.results[0].original_title;
    document.querySelector('.overview1').innerHTML = data.results[0].overview;
    document.querySelector('.card1img').src = "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path;
    document.querySelector('.title2').innerHTML = data.results[1].original_title;
    document.querySelector('.overview2').innerHTML = data.results[1].overview;
    document.querySelector('.card2img').src = "https://image.tmdb.org/t/p/original/" + data.results[1].poster_path;
    document.querySelector('.title3').innerHTML = data.results[2].original_title;
    document.querySelector('.overview3').innerHTML = data.results[2].overview;
    document.querySelector('.card3img').src = "https://image.tmdb.org/t/p/original/" + data.results[2].poster_path;
};
xhr.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=5629df6ebe3ecc0907e8029ad8d1f685");
xhr.send();