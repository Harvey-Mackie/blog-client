import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
