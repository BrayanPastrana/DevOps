function getPersonajes(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getPersonajes((data) => {
  console.log(data);


  
  data.results.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <div class="card">
        <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
        </div>

        <div class="card-info">
             <h2>${personaje.name}</h2>
            <p>${personaje.species}</p>
            <p>${personaje.location.name}</p>
            <p>${personaje.status}</p>
        </div>
    </div class="card">
        `);

    const main = document.querySelector("main");

    main.append(article);
  });
});

