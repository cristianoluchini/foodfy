const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card");

for(let card of cards) {
  card.addEventListener("click", function() {    
    const image = card.getElementsByTagName("img").item("img").getAttribute("src");
    modalOverlay.querySelector("img").src = image;
    
    const title = card.getElementsByTagName("h3").item("innerHTML").innerHTML;
    modalOverlay.querySelector("h1").innerHTML = title;

    const author = card.getElementsByTagName("p").item("innerHTML").innerHTML;
    modalOverlay.querySelector("p").innerHTML = author;
    
    modalOverlay.classList.add("active");
  })
}

document.querySelector(".close_modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
})