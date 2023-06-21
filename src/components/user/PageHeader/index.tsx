


function PageHeader(props: any) {
    return (
        <>
       
            <div id="wrapper">
                <header id="header" className="transparent-header dark">
                        <div id="header-wrap">
                            <div className="container">
                            <div className="header-row">
                                <div id="logo">
                                <a href="index-1.html">
                                    <img className="logo-default" srcSet="images/logo.png, images/logo%402x.png 2x" src="images/logo%402x.png" alt="Canvas Logo" />
                                    <img className="logo-dark" srcSet="images/logo-dark.png, images/logo-dark%402x.png 2x" src="images/logo-dark%402x.png" alt="Canvas Logo" />
                                </a>
                                </div>
                                <div className="header-misc">
                                <div id="top-search" className="header-misc-icon">
                                    <a href="#" id="top-search-trigger">
                                    <i className="uil uil-search"></i>
                                    <i className="bi-x-lg"></i>
                                    </a>
                                </div>
                                <div id="top-cart" className="header-misc-icon d-none d-sm-block">
                                    <a href="#" id="top-cart-trigger">
                                    <i className="uil uil-shopping-bag"></i>
                                    <span className="top-cart-number">5</span>
                                    </a>
                                    <div className="top-cart-content">
                                    <div className="top-cart-title">
                                        <h4>Shopping Cart</h4>
                                    </div>
                                    <div className="top-cart-items">
                                        <div className="top-cart-item">
                                        <div className="top-cart-item-image">
                                            <a href="#">
                                            <img src="images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt" />
                                            </a>
                                        </div>
                                        <div className="top-cart-item-desc">
                                            <div className="top-cart-item-desc-title">
                                            <a href="#">Blue Round-Neck Tshirt with a Button</a>
                                            <span className="top-cart-item-price d-block">$19.99</span>
                                            </div>
                                            <div className="top-cart-item-quantity">x 2</div>
                                        </div>
                                        </div>
                                        <div className="top-cart-item">
                                        <div className="top-cart-item-image">
                                            <a href="#">
                                            <img src="images/shop/small/6.jpg" alt="Light Blue Denim Dress" />
                                            </a>
                                        </div>
                                        <div className="top-cart-item-desc">
                                            <div className="top-cart-item-desc-title">
                                            <a href="#">Light Blue Denim Dress</a>
                                            <span className="top-cart-item-price d-block">$24.99</span>
                                            </div>
                                            <div className="top-cart-item-quantity">x 3</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="top-cart-action">
                                        <span className="top-checkout-price">$114.95</span>
                                        <a href="#" className="button button-3d button-small m-0">View Cart</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="primary-menu-trigger">
                                <button className="cnvs-hamburger" type="button" title="Open Mobile Menu">
                                    <span className="cnvs-hamburger-box">
                                    <span className="cnvs-hamburger-inner"></span>
                                    </span>
                                </button>
                                </div>
                                <nav className="primary-menu">
                                <ul className="menu-container">
                                    <li className="menu-item">
                                        <a className="menu-link" href="index-1.html">
                                            <div>Home</div>
                                        </a>                                   
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="#">
                                            <div>Features</div>
                                        </a>                                    
                                    </li>
                                    <li className="menu-item mega-menu">
                                        <a className="menu-link" href="#">
                                            <div>Pages</div>
                                        </a>                                   
                                    </li>
                                    <li className="menu-item mega-menu">
                                        <a className="menu-link" href="#">
                                            <div>Portfolio</div>
                                        </a>                                  
                                    </li>
                                    <li className="menu-item mega-menu">
                                        <a className="menu-link" href="#">
                                            <div>Blog</div>
                                        </a>                                  
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="shop.html">
                                            <div>Shop</div>
                                        </a>
                                    <ul className="sub-menu-container">
                                        <li className="menu-item">
                                            <a className="menu-link" href="shop.html">
                                                <div>4 Columns</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a className="menu-link" href="shop-3.html">
                                                <div>3 Columns</div>
                                            </a>                                       
                                        </li>
                                        <li className="menu-item">
                                            <a className="menu-link" href="shop-2.html">
                                                <div>2 Columns</div>
                                            </a>                                       
                                        </li>                                      
                                    </ul>
                                    </li>
                                   
                                </ul>
                                </nav>
                            </div>
                            </div>
                        </div>
                        <div className="header-wrap-clone"></div>
                </header>
            </div>
            
        </>
    )
}

export default PageHeader;