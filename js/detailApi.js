const detailContainer = document.querySelector(".detailContainer");

const url = window.location.href;
const urlParams2 = url.substring(url.indexOf("params"), url.length);
const paramsArray = urlParams2.split("&");
const areaCode2 = paramsArray[0].substring(
  paramsArray[0].indexOf("=") + 1,
  paramsArray[0].length
);
const contentId = paramsArray[1].substring(
  paramsArray[1].indexOf("=") + 1,
  paramsArray[1].length
);

axios
  .get(
    `http://api.visitkorea.or.kr/openapi/service/rest/GreenTourService/areaBasedList?ServiceKey=Q3CYAtHS7fxCOqd8Kns3aZJmrmuioRJoSSKZv7GeVPhoVgX8oKevWlLyBT0NGMkHaVWihIRaOwEM2v5CKVqtGA%3D%3D&areaCode=${areaCode2}&MobileOS=ETC&MobileApp=Tourist&numOfRows=15&_type=json`
  )
  .then((result) => {
    const apiItem = result.data.response.body.items.item[contentId];

    const divTitle = document.createElement("div");
    const detailImg = document.createElement("img");
    const infoContainer = document.createElement("div");
    const spanInfo = document.createElement("span");
    const spanAddr = document.createElement("span");
    const spanNum = document.createElement("span");

    divTitle.classList.add("detailTitle");
    infoContainer.classList.add("infoContainer");

    divTitle.innerText = apiItem.title;
    detailImg.src = apiItem.mainimage
      ? apiItem.mainimage
      : "./image/imgReady.png";
    spanInfo.innerHTML = apiItem.summary;
    spanAddr.innerText = "주소: " + apiItem.addr;
    spanNum.innerText = "전화번호: " + apiItem.tel;

    infoContainer.appendChild(spanInfo);
    infoContainer.appendChild(spanAddr);
    infoContainer.appendChild(spanNum);

    detailContainer.appendChild(divTitle);
    detailContainer.appendChild(detailImg);
    detailContainer.appendChild(infoContainer);
  })
  .catch((error) => {
    console.error(error);
  });
