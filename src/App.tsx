import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BlogDetailsPage from './pages/BlogDetails';
import BlogAddPage from './pages/BlogAddPage';
import { ThemeProvider, createTheme } from '@material-ui/core';
import BlogOverviewPage from './pages/BlogOverview';

const theme = createTheme({
  palette: {
    primary: {
      main: '#072D44',
      contrastText: '#ececec'
    },
    secondary: {
      main: '#ececec',
      contrastText: '#0e1424'
    },
    
    
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: '2.3rem',
    },
    body1: {
      fontSize: '1rem',
    },
    h5:{
      fontWeight: "bolder"
    }
  },
});

function App () {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/blog' element={<BlogOverviewPage />} />
              <Route path='/blog/:blogId' element={<BlogDetailsPage/>} />
              <Route path='/admin/add' element={<BlogAddPage/>} />
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </div>
  )
}

export default App
