import React, {Component} from 'react';
import logo from '../../tcs_50.png';
import './nav-header.css';

class NavHeader extends Component {
    render() {
        const Careers = "https://www.tcs.com/careers?country=IN&lang=EN",
            DiscoverTcs = "https://www.tcs.com/about-us",
            ProductsAndPlatforms = "\"https://www.tcs.com/customer-intelligence-and-insights-product",
            ServiceAndTech = "https://www.tcs.com/artificial-intelligence",
            Industries = "https://www.tcs.com/banking-financial-services";
        return(
          <div>
              <header className="App-header">
                  <div className="header-section">
                      <img src={logo} className="logo-design" alt="logo" />
                      <nav className="nav-design">

                          <div className="menu-header" id="menu-icon">
                              <span className="line line1"></span>
                              <span className="line line2"></span>
                              <span className="line line3"></span>
                          </div>
                          <ul>
                            <li><a href={Industries}> Industries </a></li>
                            <li><a href={ServiceAndTech}> Services & Technologies </a></li>
                            <li><a href={ProductsAndPlatforms}> Products & Platforms </a></li>
                            <li><a href={DiscoverTcs}> Discover TCS </a></li>
                            <li><a href={Careers}> Careers </a></li>
                          </ul>
                      </nav>
                  </div>
              </header>
          </div>
        );
    }
}

export default NavHeader;