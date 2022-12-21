import React from 'react';
import '../styles.css';

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="./index.html">
                    Logo Here
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu" id="navMenu">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <input className="input is-primary" type="text" placeholder="Primary input" />
                    </div>
                    <a className="navbar-item is-active" href={""}>
                        Dashboard
                    </a>
                </div>
                <div className="navbar-end">

                </div>
            </div>


        </nav>
    );
}
export default Navbar;