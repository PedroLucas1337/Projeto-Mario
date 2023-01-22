console.log(document);
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
console.log(document.querySelector(".botao-trailer"));


botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo);
})

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
});








