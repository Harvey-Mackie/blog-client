import { FunctionComponent } from 'react'
import BlogList from '../../components/BlogList'
import { Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface AdminPageProps {}

const AdminPage: FunctionComponent<AdminPageProps> = () => {
  return (
    <Container>
      <h2>Admin Page</h2>

      <Button><Link to="/admin/add">Add Blog</Link></Button>  
        

      <h3>Edit Blogs</h3>  
      <BlogList isSummary={false} isEditPage={true}/>
    </Container>
  )
}

export default AdminPage
