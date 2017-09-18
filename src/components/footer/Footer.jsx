import React from 'react';
import * as s from './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={s.footer + ' ' + s.clearfix}>
                <div className={s.logo}>
                    <span>netflixrullete</span>
                </div>
            </div>
        );
    }
}

export default Footer;
