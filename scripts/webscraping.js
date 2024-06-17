function animeSearch(query) {
    return new Promise((resolve, reject) => {
        const url = `https://myanimelist.net/anime.php?q=${encodeURIComponent(query)}`;
        console.log(url);
        fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const animeList = doc.querySelectorAll('.hoverinfo_trigger');
            const animeNames = [];
            animeList.forEach(anime => {
                animeNames.push(anime.textContent);
            });
            resolve(animeNames);
        })
        .catch(error => reject(error));
    });
}



animeSearch('kimetsu no yaiba')

// animeSearch('Naruto')
//   .then(animeNames => {
//     console.log('Result:', animeNames);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });