const header = document.querySelector('.header')

header.innerHTML += `
<div class="site-mobile-menu">
<div class="site-mobile-menu-header">
  <div class="site-mobile-menu-close mt-3">
    <span class="icon-close2 js-menu-toggle"></span>
  </div>
</div>
<div class="site-mobile-menu-body"></div>
</div>

<header class="site-navbar" role="banner">

<div class="container">
  <div class="row align-items-center">
    
    <div class="col-11 col-xl-2">
      <h1 class="mb-0 site-logo"><a href="index.html" class=" mb-0"><img src="./images/lgo-1.png (1).webp" alt="" height="90px"></a></h1>
    </div>
    <div class="col-12 col-md-10 d-none d-xl-block">
      <nav class="site-navigation position-relative text-right" role="navigation">

        <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
          <li class="active"><a href="index.html"><span>TRANG CHỦ</span></a></li>
          <li><a href="sanpham.html"><span>SẢN PHẨM</span></a></li>
          <li><a href="giothieu"><span>GIỚI THIỆU</span></a></li>
          <li><a href="tintuc.html"><span>TIN TỨC</span></a></li>
          <li><a href="lienhe"><span>LIÊN HỆ</span></a></li>
        </ul>
      </nav>
    </div>


    <div class="d-inline-block d-xl-none"><div  class="site-menu-toggle js-menu-toggle ">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div></div>
      
    </div>

  </div>
</div>

</header>
`