(async () => {
  let params = new URLSearchParams(location.search);
  let id_item = params.get("id");
  const detail = document.querySelector(".detail-product");
  console.log(detail);
  const res = await fetch(
    `https://nasea-product-default-rtdb.firebaseio.com/product/${id_item}.json`
  );

  const data = await res.json();
  console.log(data);

  if (data) {
    detail.innerHTML += `
        <div class="row detail-main">
        <div class="col-12 col-md-6">
            <div class="main-sanpham">

                <div class="main">
                    <span class="control prev">
                        <i class="bx bx-chevron-left"></i>
                    </span>
                    <span class="control next">
                        <i class="bx bx-chevron-right"></i>
                    </span>
                    <div class="img-wrap">
                        <img src="${data.img1}" alt="" />
                    </div>
                </div>
                <div class="list-img">
                    <div>
                        <img src="${data.img1}" alt="" />
                    </div>
                    <div>
                        <img src="${data.img2}" alt="" />
                    </div>
                    <div>
                        <img src="${data.img3}" alt="" />
                    </div>
                    <div>
                        <img src="${data.img4}" alt="" />
                    </div>
                  
                </div>
        
            </div>
        </div>
        <div class="content-detail col-12 col-md-6">
            <div class="title-product">
                <h1>${data.name}</h1>
            </div>
            <div class="chitiet">
              <p>${data.describe}</p>
              <p>${data.use}</p>
            </div>
            <div class="buttons">
                <a href='tel:0829595902' class="btn-hover color-1">MUA NGAY</a>
              </div>
        </div>
    </div>
        `;
  }
  let listDivImg = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

let currentIndex = 0;

setCurrent(currentIndex);

function setCurrent(index) {
  currentIndex = index;
  imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

  // remove all active img
  listDivImg.forEach((item) => {
    item.classList.remove("active");
  });

  // set active
  listDivImg[currentIndex].classList.add("active");
}

listDivImg.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    setCurrent(index);
  });
});

next.addEventListener("click", () => {
  if (currentIndex == listDivImg.length - 1) {
    currentIndex = 0;
  } else currentIndex++;

  setCurrent(currentIndex);
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = listDivImg.length - 1;
  else currentIndex--;

  setCurrent(currentIndex);
});

})();

