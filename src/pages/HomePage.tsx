import { FunctionComponent } from 'react'
import About from '../components/About'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <About />
      <BlogList />
      <Footer />
    </div>
  )
}

export default HomePage
