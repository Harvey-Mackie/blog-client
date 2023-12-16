import { FunctionComponent } from 'react'
import About from '../components/About'
import BlogList from '../components/BlogList'

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <About />
      <BlogList isSummary/>
    </>
  )
}

export default HomePage
