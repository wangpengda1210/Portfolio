const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
    music.forEach((genre, _, array) => console
        .log(`My favorite music is ${genre} choosing from ${array}`));
}