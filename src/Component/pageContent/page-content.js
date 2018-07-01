import React, {Component} from 'react';
import './page-content.css';
import tcs_eps from '../../logo-eps.png';

export default class PageContent extends Component {
    render() {
        return(
            <div className="page-content-section">
                <section className='first-section'>
                    <div className="first-section-content">
                        <img src={tcs_eps} className="first-section-img element-center" alt="logo" />
                        <h2>Celebrating 5 decades of excellence and many more to come!</h2>
                    </div>
                    <div className="footer">
                        <a href={'#'}>></a>
                    </div>
                </section>
                <section className="second-section">
                    <div>
                        <h1>MANUFACTURING JOURNAL</h1>
                        <h2>Manufacturing Journal of Innovation and Transformation
                            Supply Chain for Business 4.0</h2>
                    </div>
                </section>
            </div>
        );
    }
}