import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Home from './pages/home'
import DeeplyNested from './pages/structure/deeply-nested-state'
import FlatStructure from './pages/structure/flat-structure-state'
import WithReducer from './pages/reducer/reducer-with'
import WithoutReducer from './pages/reducer/reducer-without'
import ImmerWithReducer from './pages/reducer/reducer-with-immer'
import UsingContext1 from "./context/using-context1.tsx";
import UsingContext2 from "./context/using-context2.tsx";
import UsingContext3 from "./context/using-context3.tsx";
import UsingContext4 from './context/using-context4.tsx'




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
          <Route path='/reducer-immer' element={<ImmerWithReducer/>} />
          <Route path='/context/sample1' element={<UsingContext1/>} />
          <Route path='/context/sample2' element={<UsingContext2/>} />
          <Route path='/context/sample3' element={<UsingContext3/>} />
          <Route path='/context/sample4' element={<UsingContext4/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
