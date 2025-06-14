import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Home from './pages/home'
import DeeplyNested from './pages/structure/deeply-nested-state'
import FlatStructure from './pages/structure/flat-structure-state'
import ReducerHome from './pages/reducer/reducer-home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route element={<App/>} > 
          <Route index element={<Home/>} />
          <Route path='/structure/deeply-nested' element={<DeeplyNested/>} />
          <Route path='/structure/flat' element={<FlatStructure/>} />
          <Route path='/reducer' element={<ReducerHome/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
