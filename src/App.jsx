import UploadPage from './pages/UploadPage'
import SearchPage from './pages/SearchPage'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UploadPage />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App