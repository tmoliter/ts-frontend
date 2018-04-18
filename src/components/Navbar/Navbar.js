import React, { PureComponent } from 'react';
import './Navbar.css';

export class Navbar extends PureComponent {

    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {this.props.children}
                </nav>
            </div>
        );
    }
}