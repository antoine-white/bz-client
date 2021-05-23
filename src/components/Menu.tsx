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
        <nav>
            <ul>
                {items.map(e => (
                <li key={e.path}>
                    <Link to={e.path}>{e.text}</Link>
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;