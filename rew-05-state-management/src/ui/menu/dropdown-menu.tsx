import {NavLink} from "react-router-dom";

export default function DropdownMenu({model} : {model : DropdownMenuModel}){
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                {model.title}
            </a>
            <ul className="dropdown-menu" >
                {model.items.map((item, index) =>
                    <li key={`${item.link}-${index}`}>
                        <NavLink to={item.link} className="dropdown-item">{item.name}</NavLink>
                    </li>
                )}
            </ul>
        </li>
    )
}

export interface DropdownMenuModel{
    title : string
    items : MenuItemModel[]
}

export interface MenuItemModel{
    name : string
    link : string
}