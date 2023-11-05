import { FunctionComponent } from 'react'
import About from '../components/About'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <BlogList />
      <Footer />
    </div>
  )
}

export default HomePage
