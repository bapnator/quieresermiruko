
let boton = document.querySelector(".reproductor")

boton.addEventListener("click", () => {
let etiquetaAudio = document.createElement("audio")
etiquetaAudio.setAttribute("src", "song.mp3")
etiquetaAudio.play()
})
a = window.innerHeight
function mueveElBoton() {
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
}
