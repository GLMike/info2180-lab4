window.addEventListener('load', function() {

    var search = document.getElementById('search');
    search.addEventListener('click', handleData);


});
async function handleData(event) {
    event.preventDefault();

    var avenger = await getHeroes();


}

async function getHeroes(event) {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         alert(this.responseText);
    //     }
    // };
    // xhttp.open("GET", "superheroes.php", true);
    // xhttp.send();
    $.ajax('superheroes.php'), {
        method: "GET",
        dataType: 'json'
    }).done

}

// function displayAvenger(avenger) {
//     alert(avenger);

// }