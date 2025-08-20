import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import UiInputs from './components/page/basic/ui-inputs.tsx'
import UiChecks from './components/page/basic/ui-checks.tsx'
import UiRadios from './components/page/basic/ui-radio.tsx'
import UiDatePicker from './components/page/basic/ui-date-picker.tsx'
import UiSelect from './components/page/basic/ui-select.tsx'
import UsingAll from './components/page/basic/using-all.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='basic/inputs' element={<UiInputs/>} />
          <Route path='basic/checks' element={<UiChecks/>} />
          <Route path='basic/radio' element={<UiRadios/>} />
          <Route path='basic/date-picker' element={<UiDatePicker/>} />
          <Route path='basic/select' element={<UiSelect/>} />
          <Route path='basic/all' element={<UsingAll/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
