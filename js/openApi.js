// const locImg = document.querySelector("figure");
// const locTitle = document.querySelector(".test");
const listContainer = document.querySelector(".listContainer");

const urlParams = window.location.href;
let areaCode = 0;

if (urlParams.indexOf("params")) {
  urlParams[68] ? (areaCode = urlParams.slice(67)) : (areaCode = urlParams[67]);

  axios
    .get(
      `http://api.visitkorea.or.kr/openapi/service/rest/GreenTourService/areaBasedList?ServiceKey=Q3CYAtHS7fxCOqd8Kns3aZJmrmuioRJoSSKZv7GeVPhoVgX8oKevWlLyBT0NGMkHaVWihIRaOwEM2v5CKVqtGA%3D%3D&areaCode=${areaCode}&MobileOS=ETC&MobileApp=Tourist&_type=json`
    )
    .then((result) => {
      const apiItem = result.data.response.body.items.item;
      for (let i = 0; i < apiItem.length; i++) {
        const divContent = document.createElement("div");
        const figure = document.createElement("figure");
        const span = document.createElement("span");

        divContent.classList.add("content");
        divContent.appendChild(figure);
        divContent.appendChild(span);
        listContainer.appendChild(divContent);

        if (!apiItem[i].mainimage) {
        }
        apiItem[i].mainimage
          ? (figure.style.backgroundImage = `url(${apiItem[i].mainimage})`)
          : (figure.style.backgroundImage = `url('./image/imgReady.png')`);
        span.innerText = apiItem[i].title;
      }

      // let apiTitle = result.data.response.body.items.item[2].title;
      // let apiImgUrl = result.data.response.body.items.item[2].mainimage;
      // locTitle.innerText = apiTitle;
      // locImg.style.backgroundImage = `url(${apiImgUrl})`;
    })
    .catch((error) => {
      console.error(error);
    });
}
