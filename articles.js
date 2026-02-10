let filterButtons = document.querySelectorAll(".filter-btn");
let articleCards = document.querySelectorAll(".article-card");

let btnLogic = (button) =>{
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        })
        button.classList.add("active");
        const category = button.dataset.category;

        articleCards.forEach((articleCard)=>{
           if (category === "all" || articleCard.dataset.category === category){
                articleCard.style.display = "flex";
           }
           else{
            articleCard.style.display = "none";
           }
        })
    }

filterButtons.forEach(button => 
    button.addEventListener("click", ()=>{
        btnLogic(button)
    })
)

