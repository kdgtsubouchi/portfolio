console.log("Portfolio Loaded");

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


const fades = document.querySelectorAll(".fade");

function fadeIn(){

    fades.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", fadeIn);
window.addEventListener("load", fadeIn);


const btn =
    document.getElementById("moreBtn");

const text =
    document.getElementById("moreText");

btn.addEventListener("click", () => {

    text.classList.toggle("open");

    btn.textContent =
        text.classList.contains("open")
        ? "閉じる"
        : "詳細を見る";

});

const progressBar =
document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
    
    const scrollTop =
    window.scrollY;

    const documentHeight =
    document.documentElement.scrollHeight
    - window.innerHeight;
    
    const progress =
    (scrollTop / documentHeight) * 100;
    
    progressBar.style.width =
    progress + "%";
});

const toggleBtn =
document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggleBtn.textContent =
    "☀ Light";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    const darkMode =
    document.body.classList.contains("dark");
    
    if(darkMode){
        localStorage.setItem(
            "theme", "dark" );
            toggleBtn.textContent =
            "☀ Light";
        }else{
            localStorage.setItem(
                "theme", "light" );
                toggleBtn.textContent =
                "🌙 Dark";
            }
        });
