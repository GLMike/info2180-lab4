window.addEventListener('load', function() {

    var search = document.getElementById('search');
    search.addEventListener('click', handleData);


});
async function handleData(event) {
    event.preventDefault();

    var avenger = await getHeroes();
    displayAvenger(avenger);

}

async function getHeroes(event) {
    var heroes = await fetch('superheroes.php');
    return heroes.text()
}

function displayAvenger(avenger) {
    alert(avenger);

}