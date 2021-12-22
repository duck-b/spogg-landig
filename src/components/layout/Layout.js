import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Footer } from './';
const Layout = (props) => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    };

    const handleClose = () => {
        setMenu(false);
    };
    return(
        <>
        <Header menu={menu} handleClick={handleClick} handleClose={handleClose} />
        <div onClick={handleClose}>
        {props.children}
        <Footer/>
        </div>
        </>
    )
}

export default withRouter(Layout)