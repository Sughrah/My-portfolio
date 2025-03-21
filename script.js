// Navigation menu click effect

document.addEventListener("DOMContentLoaded" ,
function(){
    const links = document.querySelectorAll("nav ul li a");


    links.forEach(link =>{
        link.addEventListener("click", function(){
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

        });
    });
});

document.addEventListener("DOMContentLoaded", 
function(){

    document.getElementByld("contact").addEventListener("click", function(){
        alert("Feel free to contact me at sughramumshad@gmail.com");
    });
});

document.addEventListener("DOMContentLoaded",
funtion(){
    constprojectsSection =
    document.getElementByld("projects");

    window.addEventListener("scroll",function(){
        let position =
        projectsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position<screenHeight-100){
            projectsSection.style.opacity = "l";
            projectsSection.style.transform =
            "translateY(0)";
        }
    });
});