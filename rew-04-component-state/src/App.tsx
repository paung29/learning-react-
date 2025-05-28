import { NavLink, Route, Routes } from "react-router"
import Home from "./pages/home"
import MultipleState from "./pages/multiple-state"
import StateObject from "./pages/state-object"
import StateSpread from "./pages/state-spread"
import StateNested from "./pages/state-nested"

export default function App(){
  return(
    <>
      <NavBar />

      <main className="container mt-4">
          <Routes >
            <Route index element={<Home/>} />
            <Route path="/multiple" element={<MultipleState/>} />
            <Route path="/object" element={<StateObject/>} />
            <Route path="/spread" element={<StateSpread/>} />
            <Route path="/nested" element={<StateNested/>} />
          </Routes>
      </main>
    </>
  )
}

function NavBar(){
  return (
    <nav className="navbar navbar-expand bg-light shadow">

      <div className="container">
        <NavLink to={'/'} className="navbar-brand">
          Component State
        </NavLink>


        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink className={'nav-link'} to={"/multiple"} >Multiple State</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className={'nav-link'} to={"/object"} >Object State</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className={'nav-link'} to={"/spread"} >Spread State</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className={'nav-link'} to={"/nested"} >Nested State</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}