import React from 'react'

const Header = () => (
    <nav className="z-depth-3">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo responsive-image z-depth-5 black">Netflix & Chill</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a class="waves-effect waves red accent-4" href="/create">Create</a>
                    </li>
                </ul>
        </div>
    </nav>
)

export default Header
