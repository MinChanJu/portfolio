import React, { useState } from 'react'
import data from './assets/data.json'
import { AppRoutes, SideBar } from './components'
import { BrowserRouter } from 'react-router-dom'
import './styles'

const App: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false); // 사이드바 열림 여부

  return (
    <BrowserRouter basename='/portfolio'>
      <SideBar isClosed={isClosed} setIsClosed={setIsClosed} projects={data.projects} />
      <AppRoutes isClosed={isClosed} data={data} />
    </BrowserRouter>
  )
}

export default App
