import React from 'react';
// import * as style from './style.css';
const style = {};

class Footer extends React.Component {
    render() {
        return (
            <div className={style.footer + ' ' + style.clearfix}>
                <div className={style.logo}>
                    <span>netflixrullete</span>
                </div>
            </div>
        );
    }
}

export default Footer;
