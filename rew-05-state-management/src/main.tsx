import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Home from './pages/home'
import DeeplyNested from './pages/structure/deeply-nested-state'
import FlatStructure from './pages/structure/flat-structure-state'
import WithoutReducer from './pages/reducer/reducer-without'
import WithReducer from './pages/reducer/reducer-with'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route element={<App/>} > 
          <Route index element={<Home/>} />
          <Route path='/structure/deeply-nested' element={<DeeplyNested/>} />
          <Route path='/structure/flat' element={<FlatStructure/>} />
          <Route path='/without-reducer' element={<WithoutReducer/>} />
          <Route path='/with-reducer' element={<WithReducer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
