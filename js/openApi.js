const locImg = document.querySelector("figure");
const locTitle = document.querySelector(".test");

const urlParams = window.location.href;
console.log(urlParams.indexOf("params"));
console.log(urlParams[67]);

if (urlParams.indexOf("params")) {
  const areaCode = urlParams[67];

  axios
    .get(
      `http://api.visitkorea.or.kr/openapi/service/rest/GreenTourService/areaBasedList?ServiceKey=Q3CYAtHS7fxCOqd8Kns3aZJmrmuioRJoSSKZv7GeVPhoVgX8oKevWlLyBT0NGMkHaVWihIRaOwEM2v5CKVqtGA%3D%3D&areaCode=${areaCode}&MobileOS=ETC&MobileApp=Tourist&_type=json`
    )
    .then((result) => {
      console.log(result.data.response.body.items.item[0].title);
      let apiTitle = result.data.response.body.items.item[2].title;
      let apiImgUrl = result.data.response.body.items.item[2].mainimage;
      console.log(typeof apiTitle);
      locTitle.innerText = apiTitle;
      locImg.style.backgroundImage = `url(${apiImgUrl})`;
    })
    .catch((error) => {
      console.error(error);
    });
}
