import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-3 navbar-dark bg-dark">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/' className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to='/about' className="nav-link px-2 text-muted">About</Link></li>
                    <li className="nav-item"><Link to='contact' className="nav-link px-2 text-muted">Contact</Link></li>
                    <li className="nav-item"><Link to='saikat' className="nav-link px-2 text-muted">MyCv</Link></li>
                    <li className="nav-item"><Link to='cv' className="nav-link px-2 text-muted">Create CV</Link></li>
                    </ul>
                <p className="text-center text-muted">&copy; Garhbeta ChitroShala, Garhbeta</p>
            </footer>
        )
    }
}
