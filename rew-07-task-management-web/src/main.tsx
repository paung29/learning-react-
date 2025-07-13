import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home.tsx'
import ProjectList from './pages/project/project-list.tsx'
import MemberList from './pages/member/member-list.tsx'
import TaskList from './pages/task/task-list.tsx'
import MemberEdit from './pages/member/member-edit.tsx'
import MemberDetails from './pages/member/member-details.tsx'
import ProjectEdit from './pages/project/project-edit.tsx'
import ProjectDetails from './pages/project/project-details.tsx'
import TaskEdit from './pages/task/task-edit.tsx'
import TaskDetails from './pages/task/task-details.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='project' element={<ProjectList/>}/>
          <Route path='project/edit' element={<ProjectEdit/>}/>
          <Route path='project/details/:id' element={<ProjectDetails/>}/>
          <Route path='member' element={<MemberList/>}/>
          <Route path='member/edit' element={<MemberEdit/>}/>
          <Route path='member/details/:id' element={<MemberDetails/>}/>
          <Route path='task' element={<TaskList/>}/>
          <Route path='task/edit' element={<TaskEdit/>}/>
          <Route path='task/details/:id' element={<TaskDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
