// NAVBAR

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,23,42,0.9)";

        navbar.style.backdropFilter =
        "blur(10px)";

    }

    else{

        navbar.style.background =
        "transparent";

    }


});



// SCROLL REVEAL


const reveals =
document.querySelectorAll(".reveal");


function revealOnScroll(){


    reveals.forEach((element)=>{


        const windowHeight =
        window.innerHeight;


        const elementTop =
        element.getBoundingClientRect().top;


        const visiblePoint =
        100;


        if(elementTop < windowHeight - visiblePoint){


            element.classList.add("active");


        }


    });


}


window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();

// MOBILE MENU


const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");


menuToggle.addEventListener("click", ()=>{

    mobileMenu.classList.toggle("active");

    menuToggle.classList.toggle("open");

});

const menuLinks =
document.querySelectorAll(".mobile-menu a");


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("open");


    });


});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const text = form.message.value.trim();

    if(name === "" || email === "" || text === ""){

        e.preventDefault();

        message.textContent = "Uzupełnij wszystkie wymagane pola.";

        message.style.color = "#ef4444";

        return;
    }

    message.textContent = "Wysyłanie wiadomości...";

    message.style.color = "#22c55e";

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


const statsSection = document.querySelector(".stats");

const statsObserver = new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        startCounters();

        statsObserver.disconnect();

    }

});

const websiteType = document.getElementById("websiteType");
const pages = document.getElementById("pages");
const pagesValue = document.getElementById("pagesValue");
const extras = document.querySelectorAll(".extra");
const price = document.getElementById("price");
const summary = document.getElementById("summary");

function calculatePrice(){

    let total = Number(websiteType.value);

    let html = "";

    pagesValue.textContent = pages.value;

    total += Number(pages.value) * 200;

    html += `<p>Podstrony: ${pages.value}</p>`;

    extras.forEach(extra=>{

        if(extra.checked){

            total += Number(extra.value);

            html += `<p>✔ ${extra.parentElement.textContent.trim()}</p>`;

        }

    });

    price.textContent = total.toLocaleString("pl-PL")+" zł";

    summary.innerHTML = html;

}

websiteType.addEventListener("change",calculatePrice);

pages.addEventListener("input",calculatePrice);

extras.forEach(extra=>{

    extra.addEventListener("change",calculatePrice);

});

calculatePrice();

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            const updateCounter = () => {

                current += increment;

                if(current >= target){

                    counter.textContent = target;

                } else {

                    counter.textContent = current;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    observer.observe(counter);

});

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeToggle.textContent = "☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "🌙";

    }

});



