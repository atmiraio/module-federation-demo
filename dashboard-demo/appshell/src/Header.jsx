import React from 'react';
import './Header.less';

export const Header = () => {
    return (
        <div className="header">
            <a className="header-logo__link" href="/" title="Atmira Demo">
            </a>
            <div className="avatar">
                <img src="https://cdn-images-1.medium.com/fit/c/64/64/0*6DlBGW9amkCcEMUM" className="avatar-image" alt="Chris Nienhuis" />
            </div>
        </div>
    );
};
