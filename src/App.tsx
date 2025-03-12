import React, { useState } from 'react'
import data from './assets/data.json'
import { AppRoutes, PageTitle, SideBar } from './components'
import { HashRouter } from 'react-router-dom'
import './styles'

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 여부

  return (
    <HashRouter>
      <PageTitle projects={data.projects} />
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} projects={data.projects} />
      <AppRoutes isSidebarOpen={isSidebarOpen} data={data} />
    </HashRouter>
  )
}

export default App
