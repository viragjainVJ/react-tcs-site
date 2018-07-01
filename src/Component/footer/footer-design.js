import React, {Component} from "react";
import '../../Component/footer/footer-design.css';

export default class Footer extends Component {
    render() {
        const createdBy= "https://www.linkedin.com/in/viragjain-vj";
        return(
            <div className="footer-design">
                <span>Created By</span>
                <a href={createdBy}>VIRAG JAIN</a>
            </div>
        );
    }
}