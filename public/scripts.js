// Função para pegar o ID da receita
const recipes = document.querySelectorAll(".card");
for(let recipe of recipes) {
  recipe.addEventListener("click", function() {
    recipeId = recipe.getAttribute("id");
    window.location.href = `/recipe/${recipeId}`;
  });  
};

// Função para ocultar elementos da página da receita
const hidden = document.querySelectorAll(".hide");
for(let hide of hidden) {
  hide.addEventListener("click", function() {
    const subtitle = hide.getAttribute("id");
    const section = document.querySelector(`.${subtitle}`);

    if(hide.innerHTML == "Esconder") {
      section.classList.add("hidden");
      hide.innerHTML = "Mostrar";
    } else {
      section.classList.remove("hidden");
      hide.innerHTML = "Esconder";
    }   
  });
};