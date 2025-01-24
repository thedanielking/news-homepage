const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", (e)=>{
    const navBar = document.getElementById("navBar");
    navBar.classList.add("menuTab");
    document.body.style.background = "var(--clr--neutral--200)";
})

closeBtn.addEventListener("click", (e)=>{
    const navBar = document.getElementById("navBar");
    navBar.classList.remove("menuTab");
    document.body.style.background = "var(--clr--neutral--100)";
})
















