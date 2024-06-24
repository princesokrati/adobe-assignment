document.addEventListener("DOMContentLoaded",function(){let a=document.querySelector(".loader");a.classList.remove("loader--completed"),setTimeout(()=>{a.classList.add("loader--completed")},3e3);let i=document.querySelector(".js-mobile-menu"),l=document.getElementById("navListWrap");i&&l&&i.addEventListener("click",function(){l.classList.toggle("header__nav-list-wrap--show")});let c=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>100?c.classList.add("header--fixed"):c.classList.remove("header--fixed")});let o=document.querySelector(".js-mobile-filter"),d=document.getElementById("productFilter");o&&d&&o.addEventListener("click",function(){d.classList.toggle("product__filter--show")});let n=document.querySelector(".product__filter-close");n&&n.addEventListener("click",function(){d.classList.remove("product__filter--show")});let _=document.getElementById("clearFilters");_&&_.addEventListener("click",function(a){a.preventDefault(),e="",t=[],s=1,document.querySelectorAll(".checkbox-input").forEach(e=>{e.checked=!1}),d.classList.remove("product__filter--show"),r.getProducts(e,t)});let u=document.querySelector(".product__product-sort .visually-hidden"),p=document.getElementById("sorting");u&&p&&u.addEventListener("click",function(e){p.focus(),p.click()})});let e="",t=[],s=1,a=10,i=[],l=[],c="";const r={async loadMoreProducts(){try{document.querySelector("#loadMoreProducts").addEventListener("click",function(){a=20,s=1,r.filterProducts(),r.displayProducts(s),document.querySelector("#resetProducts").style.display="block",document.querySelector("#loadMoreProducts").style.display="none"}),document.querySelector("#resetProducts").addEventListener("click",function(){a=10,s=1,r.filterProducts(),r.displayProducts(s),document.querySelector("#resetProducts").style.display="none",document.querySelector("#loadMoreProducts").style.display="block"})}catch(e){console.log(e)}},async searching(){try{document.querySelector("#search-input").addEventListener("keyup",function(e){c=e.target.value.toLowerCase(),s=1,r.filterProducts(),r.displayProducts(s)})}catch(e){console.log(e)}},async addShorting(){try{document.getElementById("sorting").addEventListener("change",function(t){e=t.target.value,s=1,r.filterProducts(),r.displayProducts(s)})}catch(e){console.log(e)}},async addCategoryFilter(){try{for(let e of document.querySelectorAll(".checkbox-input"))e.addEventListener("change",function(e){if(e.target.checked)t.push(e.target.value);else{let s=t.indexOf(e.target.value);s>-1&&t.splice(s,1)}s=1,r.filterProducts(),r.displayProducts(s)})}catch(e){console.log(e)}},async getProducts(){try{let e=await fetch("https://fakestoreapi.com/products");i=await e.json(),r.filterProducts(),r.displayProducts(s)}catch(e){console.log(e)}},filterProducts(){l=i,e&&(l="LowToHigh"===e?l.sort((e,t)=>e.price-t.price):l.sort((e,t)=>t.price-e.price)),t.length>0&&(l=l.filter(e=>t.includes(e.category))),c&&(l=l.filter(e=>e.title.toLowerCase().includes(c)))},displayProducts(e){let t=(e-1)*a,s=e*a,i=l.slice(t,s),c="";for(let e of i)c+=`
            <li class="product__product-item">
                <div class="product__product-card">
                    <div class="product__product-img">
                        <img src="${e.image}" alt="${e.title}">
                    </div>
                    <div class="product__product-content">
                        <h3 class="product__product-title">${e.title.substring(0,30)}</h3>
                        <p class="product__product-price">$${e.price}</p>
                        <button class="product__add-to-cart">
                            <img src="assets/images/heart.png" alt="cart icon" class="product__cart-icon">
                        </button>
                    </div>
                </div>
            </li>
            `;document.getElementById("productList").innerHTML=c},setupPagination(){document.querySelector(".product__pagination");let e=Math.ceil(l.length/a),t=document.createElement("li");t.className="product__page-item",1===s&&t.classList.add("product__page-item--hide"),t.innerHTML=`<a class="product__page-link" href="#" aria-label="Previous">
            <img class="product__page-icon product__page-left" src="assets/images/chevron-right.svg">
        </a>`,t.addEventListener("click",function(e){e.preventDefault(),s>1&&(s--,r.displayProducts(s))});for(let t=1;t<=e;t++){let e=document.createElement("li");e.className="product__page-item",t===s&&e.classList.add("product__page-item--active"),e.innerHTML=`<a class="product__page-link" href="#">${t}</a>`,e.addEventListener("click",function(e){e.preventDefault(),s=t,r.displayProducts(s)})}let i=document.createElement("li");i.className="product__page-item",s===e&&i.classList.add("product__page-item--hide"),i.innerHTML='<a class="product__page-link" href="#"><img class="product__page-icon product__page-right" src="assets/images/chevron-right.svg"></a>',i.addEventListener("click",function(t){t.preventDefault(),s<e&&(s++,r.displayProducts(s))})}};r.addShorting(),r.addCategoryFilter(),r.getProducts(),r.searching(),r.loadMoreProducts(),document.getElementById("app").innerHTML=`
<body>
    <!-- Header Start -->
    <header role="header">
        <div class="header">
            <div class="container">
                <button aria-label="Open Menu" class="header__hamburger-menu header__hamburger-menu--show js-mobile-menu" aria-expanded="false" aria-controls="navListWrap">
                    <span class="header__bar header__bar1"></span>
                    <span class="header__bar header__bar2"></span>
                    <span class="header__bar header__bar3"></span>
                </button>
                <a class="header__logo" href="javascript:void(0)">Venia</a>
                <nav class="header__nav-list-wrap" id="navListWrap" role="navigation">
                    <ul class="header__nav-list">
                        <li class="header__nav-item header__nav-item--active">
                            <a href="javascript:void(0)" class="header__nav-link">Home</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="javascript:void(0)" class="header__nav-link">Women</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="javascript:void(0)" class="header__nav-link">Men</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="javascript:void(0)" class="header__nav-link">Smart Gear</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="javascript:void(0)" class="header__nav-link">Accessories</a>
                        </li>
                    </ul>
                </nav>
                <ul class="header__ex-link-list">
                    <li class="header__ex-link-item">
                        <a href="javascript:void(0)" class="header__nav-cart" aria-label="Cart with 10 items">
                            <img src="assets/images/market.png" alt="Cart Icon" class="header__icon-img">
                            <span class="header__active-count">10</span>
                        </a> 
                    </li>
                </ul>                
            </div>
        </div>
    </header>    
    <!-- Header end -->

    <main role="main">
        <h1 class="cm-not-in-page">Product Listing Page</h1>
        <div class="pg-plp">
            <section>
                <div class="banner" role="banner">
                    <div class="banner__content">
                        <h1 class="banner__title">Men's Outerwear</h1>
                    </div>
                    <div class="banner__image-wrapper">
                        <img src="assets/images/banner.png" alt="Men's Outerwear" class="banner__image">

                        <div class="header__search">
                            <div class="search_input-wrap">
                                <input id="search-input" type="text" placeholder="Search" class="s-input">
                                <button class="icon-search s-btn">
                                    <img src="assets/images/search.png" alt="Cart Icon" class="header__search-img">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="bs-sec typ-plp">
                    <div class="container">
                        <div class="sec-cont">
                            <div class="product">
                                <div class="product__filter-wrap">
                                    <ul class="product__breadcrumb" aria-label="Breadcrumb">
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link">Clothing</a>
                                        </li>
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link">Women's</a>
                                        </li>
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link product__breadcrumb--active">Outerwear</a>
                                        </li>
                                    </ul>
                                    <div class="product__filter" id="productFilter">
                                        <button aria-label="Close Filters" class="product__filter-close">x</button>
                                        <h2 class="product__filter-title" id="productFilterTitle">Filters</h2>
                                        <a href="javascript:void(0)" class="product__filter-clear" id="clearFilters">Clear All</a>
                                        <fieldset>
                                            <legend class="product__filter-subTitle">Categories</legend>
                                            <ul class="product__checkbox-list">
                                                <li class="product__checkbox-item">
                                                    <div class="bs-checkbox typ-plp">
                                                        <input class="checkbox-input" type="checkbox" name="categories-type" id="jewelery" value="jewelery">
                                                        <label for="jewelery">Jewellery</label>
                                                    </div>
                                                </li>
                                                <li class="product__checkbox-item">
                                                    <div class="bs-checkbox typ-plp">
                                                        <input class="checkbox-input" type="checkbox" name="categories-type" id="electronics" value="electronics">
                                                        <label for="electronics">Electronics</label>
                                                    </div>
                                                </li>
                                                <li class="product__checkbox-item">
                                                    <div class="bs-checkbox typ-plp">
                                                        <input class="checkbox-input" type="checkbox" name="categories-type" id="mens-clothing" value="men's clothing">
                                                        <label for="mens-clothing">Men's Clothing</label>
                                                    </div>
                                                </li>
                                                <li class="product__checkbox-item">
                                                    <div class="bs-checkbox typ-plp">
                                                        <input class="checkbox-input" type="checkbox" name="categories-type" id="women-clothing" value="women's clothing">
                                                        <label for="women-clothing">Women's Clothing</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="product__product-wrap">
                                    <ul class="product__breadcrumb typ-mobile" aria-label="Breadcrumb">
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link">Clothing</a>
                                        </li>
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link">Women's</a>
                                        </li>
                                        <li class="product__breadcrumb-item">
                                            <a href="javascript:void(0)" class="product__breadcrumb-link product__breadcrumb--active">Outerwear</a>
                                        </li>
                                    </ul>
                                    <div class="product__product-head">                                       
                                        <span class="product__product-result"><span>38</span> Results</span>
                                        <ul class="product__product-group">
                                            <li class="product__product-block">
                                                <button class="product__product-icon js-mobile-filter" aria-label="Filter Results">
                                                    <img src="assets/images/sliders.svg" class="icon-slide" alt="Filter Icon"/>
                                                    <span class="product__icon-label">Filter Results</span>
                                                </button>
                                            </li>
                                            <li class="product__product-block">
                                                <div class="product__product-sort">
                                                    <label for="sorting" class="visually-hidden" id="sortingLabel">
                                                        <img src="assets/images/sliders.svg" class="icon-slide2" alt="Sort Icon"/>
                                                        Sort by
                                                    </label>
                                                    <select class="product__product-select" name="sort" id="sorting">
                                                        <option class="product__option" value="LowToHigh">Low to High Price</option>
                                                        <option class="product__option" value="HighToLow">High to Low Price</option>
                                                    </select>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <ul class="product__product-list" id="productList">
                                    </ul>                                                               
                                    <div class="product__readMoreBtn-wrap">
                                        <!-- <ul class="product__pagination"> -->
                                            <!-- Pagination buttons will be injected here by JavaScript -->
                                        <!-- </ul>   -->
                                        <button id="loadMoreProducts" class="btn btn-default product__readMoreBtn">Load More</button>
                                        <button id="resetProducts" style="display:none" class="btn btn-default product__readMoreBtn">Reset</button>
                                    </div>      
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
        </div>      
        <div class="loader">
            <div class="loader__inner">
                <div class="loader__span"></div>
            </div>           
        </div> 
    </main>
   
    <!-- Footer Start -->
    <footer class="footer" role="footer">
        <div class="container">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <h3 class="footer__heading">Account</h3>
              <ul class="footer__list">
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Sign In</a></li>
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Register</a></li>
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Order Status</a></li>
              </ul>
            </li>
            <li class="footer__nav-item">
              <h3 class="footer__heading">About Us</h3>
              <ul class="footer__list">
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Our Story</a></li>
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Careers</a></li>
              </ul>
            </li>
            <li class="footer__nav-item">
              <h3 class="footer__heading">Help</h3>
              <ul class="footer__list">
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Contact Us</a></li>
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Order Status</a></li>
                <li class="footer__list-item"><a href="javascript:void(0)" class="footer__link">Returns</a></li>
              </ul>
            </li>
            <li class="footer__nav-item">
              <h3 class="footer__heading">Follow Us!</h3>
              <p class="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <ul class="footer__social-list">
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="assets/images/instagram.svg" alt="Instagram Icon" class="footer__social-icon"></a></li>
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="assets/images/facebook.svg" alt="Facebook Icon" class="footer__social-icon"></a></li>
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="assets/images/twitter.svg" alt="Twitter Icon" class="footer__social-icon"></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footer__info">
            <div class="container">
                <ul class="footer__info-list">
                    <div class="footer__info-item footer__logo">
                        <a href="javascript:void(0)" class="footer__logo-link">VENIA</a>
                    </div>
                    <div class="footer__info-item footer__copyright">
                        <p class="footer__copyright-text">\xa9 Company Name Address Ave, City Name, State ZIP</p>
                    </div>
                    <ul class="footer__info-item footer__links">
                        <li class="footer__links-item"><a href="javascript:void(0)" class="footer__link">Terms of Use</a></li>
                        <li class="footer__links-item"><a href="javascript:void(0)" class="footer__link">Privacy Policy</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </footer>
    <!-- Footer end -->

    <!-- build:js assets/js/custom.min.js -->
    <!-- endbuild -->

</body>
`;
//# sourceMappingURL=index.d289caea.js.map
