import "./styles.css";
import './script';
import banner from './assets/images/banner.png';
import cartIcon from './assets/images/market.png';
import search from './assets/images/search.png';
import slider from './assets/images/sliders.svg'
import instagram from './assets/images/instagram.svg';
import facebook from './assets/images/facebook.svg';
import twitter from './assets/images/twitter.svg';

document.getElementById("app").innerHTML = `
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
                            <img src="${cartIcon}" alt="Cart Icon" class="header__icon-img">
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
                        <img src="${banner}" alt="Men's Outerwear" class="banner__image">

                        <div class="header__search">
                            <div class="search_input-wrap">
                                <input id="search-input" type="text" placeholder="Search" class="s-input">
                                <button class="icon-search s-btn">
                                    <img src="${search}" alt="Cart Icon" class="header__search-img">
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
                                                    <img src="${slider}" class="icon-slide" alt="Filter Icon"/>
                                                    <span class="product__icon-label">Filter Results</span>
                                                </button>
                                            </li>
                                            <li class="product__product-block">
                                                <div class="product__product-sort">
                                                    <label for="sorting" class="visually-hidden" id="sortingLabel">
                                                        <img src="${slider}" class="icon-slide2" alt="Sort Icon"/>
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
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="${instagram}" alt="Instagram Icon" class="footer__social-icon"></a></li>
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="${facebook}" alt="Facebook Icon" class="footer__social-icon"></a></li>
                <li class="footer__social-list-item"><a href="javascript:void(0)" class="footer__social-link"><img src="${twitter}" alt="Twitter Icon" class="footer__social-icon"></a></li>
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
                        <p class="footer__copyright-text">© Company Name Address Ave, City Name, State ZIP</p>
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