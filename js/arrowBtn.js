const arrowBtnLeft = document.querySelector(".arrowBtn-left");
const arrowBtnRight = document.querySelector(".arrowBtn-right");
const ul = document.querySelector(".navContainer");
const liList = document.querySelectorAll(".navContainer-region");

let arrowPostion = ul.getAttribute("data-position");

const init = () => {
  arrowBtnLeft.addEventListener("click", () => {
    if (Number(arrowPostion) < 0) {
      arrowPostion = Number(arrowPostion) + 162;
      ul.style.transition = "transform 1s";
      ul.style.transform = `translateX(${String(arrowPostion)}px)`;
      ul.setAttribute("data-position", arrowPostion);
    }
    console.log(arrowPostion);
  });

  arrowBtnRight.addEventListener("click", () => {
    if (ul.clientWidth < liList.length * 162 + Number(arrowPostion)) {
      arrowPostion = Number(arrowPostion) - 162;
      ul.style.transition = "transform 1s";
      ul.style.transform = `translateX(${String(arrowPostion)}px)`;
      ul.setAttribute("data-position", arrowPostion);
    }
    console.log(arrowPostion);
  });
};

init();
