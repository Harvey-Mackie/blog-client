import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BlogDetailsPage from './pages/BlogDetails';
import { ThemeProvider, createTheme } from '@material-ui/core';
import BlogOverviewPage from './pages/BlogOverview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPage from './pages/admin/AdminPage';
import AdminBlogAddPage from './pages/admin/AdminBlogAddPage';
import AdminBlogEditPage from './pages/admin/AdminBlogEditPage';

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
          <body style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "space-between"
          }}>
            <div>
              <header>
                <Navbar/>
              </header>
              
              <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/blog' element={<BlogOverviewPage />} />
                    <Route path='/blog/:blogId' element={<BlogDetailsPage/>} />
                    <Route path='/admin' element={<AdminPage/>} />
                    <Route path='/admin/add' element={<AdminBlogAddPage/>} />
                    <Route path='/admin/edit/:blogId' element={<AdminBlogEditPage/>} />
                </Routes>
              </main>
            </div>
            <footer>
              <Footer />
            </footer>
          </body>

        </Router>
      </ThemeProvider>
      <ToastContainer />
    </div>
  )
}

export default App
