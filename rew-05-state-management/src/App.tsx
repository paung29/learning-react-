import { NavLink, Outlet } from "react-router-dom"
import DropdownMenu, {type DropdownMenuModel} from "./ui/menu/dropdown-menu.tsx";




export default function App(){
  return (
    <>
      <NavBar />

      <main className="container mt-4">
        <Outlet/> 
      </main>
    </>
  )
}

function NavBar(){
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/" >
          <i className="bi-house"></i> State Management
        </NavLink>

        <ul className="navbar-nav" >
            <DropdownMenu model={STATE_STRUCTURE_MENU} />
            <DropdownMenu model={REDUCER_MENU} />
            <DropdownMenu model={Context_Menu} />
        </ul>


      </div>
    </nav>
  )
}

const STATE_STRUCTURE_MENU:DropdownMenuModel = {
    title: "State Structure",
    items: [
        {name : "Nested Structure", link : "/structure/deeply-nested"},
        {name : "Flat Structure", link : "/structure/flat"},
    ]
}

const REDUCER_MENU :DropdownMenuModel = {
    title: "Reducer",
    items: [
        {name : "Without Reducer", link : "/without-reducer"},
        {name : "Using Reducer", link : "/with-reducer"},
        {name : "Reducer with Immer", link : "/reducer-immer"},
    ]
}


const Context_Menu : DropdownMenuModel = {
    title : "Context",
    items : [
        {name : "Sample1", link : "/context/sample1"},
        {name : "Sample2", link : "/context/sample2"},
        {name : "Sample3", link : "/context/sample3"},
        {name : "Sample4", link : "/context/sample4"}
    ]
}