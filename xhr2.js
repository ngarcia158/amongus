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

    document.querySelector('.title4').innerHTML = data.results[3].original_title;
    document.querySelector('.overview4').innerHTML = data.results[3].overview;
    document.querySelector('.card4img').src = "https://image.tmdb.org/t/p/original/" + data.results[3].poster_path;

    document.querySelector('.title5').innerHTML = data.results[4].original_title;
    document.querySelector('.overview5').innerHTML = data.results[4].overview;
    document.querySelector('.card5img').src = "https://image.tmdb.org/t/p/original/" + data.results[4].poster_path;

    document.querySelector('.title6').innerHTML = data.results[5].original_title;
    document.querySelector('.overview6').innerHTML = data.results[5].overview;
    document.querySelector('.card6img').src = "https://image.tmdb.org/t/p/original/" + data.results[5].poster_path;

    document.querySelector('.title7').innerHTML = data.results[6].original_title;
    document.querySelector('.overview7').innerHTML = data.results[6].overview;
    document.querySelector('.card7img').src = "https://image.tmdb.org/t/p/original/" + data.results[6].poster_path;

    document.querySelector('.title8').innerHTML = data.results[7].original_title;
    document.querySelector('.overview8').innerHTML = data.results[7].overview;
    document.querySelector('.card8img').src = "https://image.tmdb.org/t/p/original/" + data.results[7].poster_path;

    document.querySelector('.title9').innerHTML = data.results[8].original_title;
    document.querySelector('.overview9').innerHTML = data.results[8].overview;
    document.querySelector('.card9img').src = "https://image.tmdb.org/t/p/original/" + data.results[8].poster_path;

};
xhr.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=5629df6ebe3ecc0907e8029ad8d1f685");
xhr.send();