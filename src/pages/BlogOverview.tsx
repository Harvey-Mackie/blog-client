import { FunctionComponent } from 'react'
import About from '../components/About'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface BlogOverviewPageProps {}

const BlogOverviewPage: FunctionComponent<BlogOverviewPageProps> = () => {
  return (
    <div>
      <Navbar/>
      <BlogList isSummary={false} />
      <Footer />
    </div>
  )
}

export default BlogOverviewPage
