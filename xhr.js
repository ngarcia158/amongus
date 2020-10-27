var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
});

xhr.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=5629df6ebe3ecc0907e8029ad8d1f685");


xhr.send();