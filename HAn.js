const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question"); 
const gif = document.querySelector(".gif");
const KielBtn = document.querySelector(".Kiel-btn");
const RainierBtn = document.querySelector(".Rainier-btn");

KielBtn.addEventListener("click", () => { 
    question.innerHTML = "YANNNN BUTI NAMAN ILY ALWAYS"; 
    gif.src =
      "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

RainierBtn.addEventListener("mouseover", () Rightarrow\
  const RainierßtnRect = RainierBtn.getBoundingClientRect(); 
  const maxX = window.innerWidth - RainierBtnRect.width;
  const maxY = window.innerHeight RainierBtnRect.height;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random()* maxY);

RainierBtn.style.left = randomX + "px";
RainierBtn.style.top = randomY + "px";
});