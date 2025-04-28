import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './component/sidebar/index'
import Page1 from './pages/page1'
import Page4 from './pages/Page4'
import SubPage1 from './pages/page5/page1'
import SubPage2 from './pages/page5/page2'
import AspectRatio from './pages/Layout/AspectRatio'
import Columns from './pages/Layout/Columns'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Page1 />} />
          <Route path="/AspectRatio" element={<AspectRatio />} />
          <Route path="/Columns" element={<Columns />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="subpage1" element={<SubPage1 />} />
          <Route path="subpage2" element={<SubPage2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
