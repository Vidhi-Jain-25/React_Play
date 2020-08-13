import React from 'react';
import {Link, NavLink , withRouter} from 'react-router-dom';

const Navbar=(props)=>{

    return (
        <nav className="nav-wrapper red darken-3">
            <div >
                <a className="brand-logo">REACT_CONCEPTS</a>
                <ul className="right">
                    <li><Link to="/pg3">React_Basics</Link></li>
                    <li><Link to="/pg1">React_Redux</Link></li>
                    <li><Link to="/pg2">React_Hooks</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);