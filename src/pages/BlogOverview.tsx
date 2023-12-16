import { FunctionComponent } from 'react'
import BlogList from '../components/BlogList'

interface BlogOverviewPageProps {}

const BlogOverviewPage: FunctionComponent<BlogOverviewPageProps> = () => {
  return (
    <>
      <BlogList isSummary={false} />
    </>
  )
}

export default BlogOverviewPage
