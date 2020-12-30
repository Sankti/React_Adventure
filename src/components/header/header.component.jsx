import React from 'react';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <div className='options'>
            <a
                className='option'
                href=''
            >
                Character Sheet
            </a>
        </div>
    </div>
);

export default Header;