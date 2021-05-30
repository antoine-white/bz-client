import React from "react";
import { Link } from "react-router-dom";

export interface MenuItemProp {
    text: string,
    path: string,
}

export type Menuprop = {
    items: MenuItemProp[]
}

const Menu: React.FC<Menuprop> = ({ items }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="mx-4">
                    <img src="/account_balance_black_24dp.svg" alt="" width="30" height="30" className="d-inline-block  mx-4" />
                    BZ Bank
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {items.map(e => (
                            <li key={e.path} className="nav-item">
                                <Link className="nav-link" to={e.path}>{e.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;