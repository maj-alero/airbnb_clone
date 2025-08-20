function scrollToStart() {
  const gallery = document.getElementById('gallery');
  gallery.scrollTo({ left: 0, behavior: 'smooth' });
}

function scrollToEnd() {
  const gallery = document.getElementById('gallery');
  gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' });
}

// Dropdown menu functionality


const menu = document.querySelectorAll(".three")

for (let index = 0; index < menu.length; index++) {
  menu[index].addEventListener("click", function (e) {
    e.stopPropagation();
    menu[index].classList.toggle("show");

  window.addEventListener("click", function () {
    menu[index].classList.remove("show");
});

});
}







const sticky = document.getElementById("sticky-nav");
const original = document.getElementById("originalNavbar");
const stickyMobile = document.getElementById("resp-sticky");
const navMobile = document.getElementById("responsive-nav")   

window.addEventListener("scroll", function () {
    if (window.innerWidth > 750) { 
        // Desktop
        if (window.scrollY > 100) {
            sticky.classList.add("show");
            original.style.visibility = "hidden";
        } else {
            sticky.classList.remove("show");
            original.style.visibility = "visible";
        }
    } else { 
        // Mobile
        if (window.scrollY > 100) {
            stickyMobile.classList.add("show");
            navMobile.style.visibility = "hidden"
        } else {
            stickyMobile.classList.remove("show");
            navMobile.style.visibility ="visible";
        }
    }
});
    



const host = document.getElementById('host-popup');
const closeHost = document.getElementById('closeHost');
const homeOpt = document.getElementById('home-option');
const expOpt = document.getElementById('exp-option');
const servOpt = document.getElementById('serv-option');
const nextBtn = document.getElementById('next-btn')
const openHost = document.getElementsByClassName('one')

for (let i = 0; i < openHost.length; i++) {
    openHost[i].addEventListener("click",()=>{
    host.style.display = "flex"
    window.addEventListener("scroll",()=>{
      if(window.innerWidth > 750){
        if (window.scrollY > 100) {
          sticky.classList.remove("show")
        }
    }});
    
  });
  
}


closeHost.addEventListener("click",()=>{
    host.style.display = "none";
    window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
})

    homeOpt.addEventListener("click",()=>{
        homeOpt.classList.add("active")
        nextBtn.classList.add("active")
        servOpt.classList.remove("active")
        expOpt.classList.remove("active")
    });

expOpt.addEventListener("click",()=>{
    expOpt.classList.add("active")
    nextBtn.classList.add("active")
    homeOpt.classList.remove("active")
    servOpt.classList.remove("active")
});
servOpt.addEventListener("click",()=>{
    servOpt.classList.add("active")
    nextBtn.classList.add("active")
    homeOpt.classList.remove("active")
    expOpt.classList.remove("active")
});

window.addEventListener("click", (e) => {
  if (e.target === host) {
    host.style.display = "none";
  }
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
});

const openBtn = document.getElementsByClassName("openLogin");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("login");
const modalBox = document.getElementById("login-content");

for (let index = 0; index < openBtn.length; index++) {
  openBtn[index].addEventListener("click", (e) => {
  e.stopPropagation()
  modal.style.display = "flex";
  menu[index].classList.remove("show");
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.remove("show")
      }
    });
});
  
}


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
});

// Optional: close if clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
});

// Prevent modal content from closing when clicked inside
modalBox.addEventListener("click", (e) => {
  e.stopPropagation();
});


const popup = document.getElementById("lang-currency-popup");
const closePopup = document.getElementById("popup-close");
const langTab = document.getElementById("lang-tab");
const currencyTab = document.getElementById("currency-tab");
const langSection = document.getElementById("language-section");
const currencySection = document.getElementById("currency-section");
const openPopup = document.getElementsByClassName("two");

for (let index = 0; index < openPopup.length; index++) {
  openPopup[index].addEventListener("click",()=>{
  popup.style.display = "flex";
  window.addEventListener("scroll",()=>{
      if (window.scrollY > 100) {
        sticky.classList.remove("show")
      }
    });
});
  
}


closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
});

langTab.addEventListener("click", () => {
  langTab.classList.add("active");
  currencyTab.classList.remove("active");
  langSection.style.display = "block";
  currencySection.style.display = "none";
});

currencyTab.addEventListener("click", () => {
  currencyTab.classList.add("active");
  langTab.classList.remove("active");
  currencySection.style.display = "block";
  langSection.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
  window.addEventListener("scroll",()=>{
    
      if (window.scrollY > 100) {
        sticky.classList.add("show")
      }
    });
});

let content = document.getElementsByClassName("content")

function showPage(pageNumber) {
    // Hide all pages
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    
    // Show the selected page
    content[pageNumber].style.display = "grid";
    content[pageNumber].style.gridTemplateColumns = "repeat(6, 1fr)"; 
    content[pageNumber].style.gridTemplateRows = "repeat(3, auto)";
    content[pageNumber].style.position = "relative";

    if (window.innerWidth <=750){
      content[pageNumber].style.display = "grid";
      content[pageNumber].style.gridTemplateColumns = "repeat(2, 1fr)"; 
      content[pageNumber].style.gridTemplateRows = "auto";
      content[pageNumber].style.position = "relative";
    }
}