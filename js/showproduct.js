(async () =>{
    const mainproduct = document.querySelector('.mainproduct')

    const res = await fetch('https://nasea-product-default-rtdb.firebaseio.com/product.json')
    const data = await res.json();

    console.log(data);

    if(data){
        data.map((value , key) => {
            mainproduct.innerHTML += `
            <div class="item-product col-12 col-md-3">
            <div class="item-detail">
              <div class="img-product">
                <a href="detail.html?id=${key}">
                  <img src="${value.img1}" alt="" height="100%" width="100%" >
                </a>
              </div>
              <div class="name-product">
                <h3>${value.name}</h3>
              </div>
              <div class="buttons ">
                <a href="tel:0829595902" class="btn-hover color-11">MUA NGAY</a>
              </div>
            </div>
          
          </div>
            `
        })
    }

})()