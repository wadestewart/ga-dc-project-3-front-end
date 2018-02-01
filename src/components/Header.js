import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="blue-grey lighten-4 z-depth-3">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo red-text z-depth-5 black">Netflix, Etc. & Chill</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to='/movies/Post'>Create</Link>
                        {/* <a class="red accent-4 waves-effect waves" href="/create">Create</a> */}
                    </li>
                </ul>
        </div>
    </nav>
)

export default Header
