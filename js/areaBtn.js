const regionBtnAll = document.querySelectorAll(".navContainer-region");

regionBtnAll.forEach((i) => {
  i.addEventListener("click", () => {
    const params = i.getAttribute("data-paramater");

    //window.location.href = `http://127.0.0.1:5500/jsp_project/Tourist/locationList.html?params=${params}`;
    window.location.href = `http://211.59.144.185:8080/jsp15/Tourist/locationList.html?params=${params}`;
  });
});
