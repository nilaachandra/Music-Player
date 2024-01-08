console.log("hh")

async function getSongs() {
    const folder = "Library"; // Set the folder name
    const url = new URL(`/${folder}/`, import.meta.url);
    let a = await fetch(url);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    return songs;
}

async function main() {
    let songs = await getSongs();
    console.log(songs);
}

main();
