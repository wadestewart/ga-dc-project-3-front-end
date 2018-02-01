import React from 'react'

const Header = () => (
    <nav className="white z-depth-3">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo red-text z-depth-5 black">Netflix & Chill</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a class="red accent-4 waves-effect waves" href="/create">Create</a>
                    </li>
                </ul>
        </div>
    </nav>
)

export default Header
