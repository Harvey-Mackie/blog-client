import { FunctionComponent, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Container, makeStyles } from '@material-ui/core'
import { BlogDetails } from '../api/models/Blog'
import { GetBlog } from '../api/blog'
import MarkdownRenderer from '../components/MarkdownRenderer'


const useStyles = makeStyles(theme => ({
  container:{
    textAlign: "center",
    padding: "1rem 1.5rem 5rem 1.5rem",
    minHeight: "70vh",
    maxWidth: "100ch"
  },
  imageContainer:{
    maxHeight: "22rem"
  },
  articleTitle:{
    textAlign: "center",
    fontSize: "3.75rem",
    lineHeight: "1"
  },
  articleText:{
    textAlign: "left",
    fontSize: "1.2rem",
    "& p":{
      display: "flex",
      width: "100%",
      "& > img":{
        width: "100%",
      }
    }
  }
}))


interface BlogDetailsPageProps {}

const BlogDetailsPage: FunctionComponent<BlogDetailsPageProps> = () => {
  
  const styles = useStyles();
  const [blog, setBlog] = useState<BlogDetails>();

  async function initBlogs(){
    const blogsResponse = await GetBlog(1);
    setBlog(blogsResponse); 
  }

  useEffect(() => {
    initBlogs();
  }, []);

    return (
    <div>
      <Navbar/>
    
        <Container className={styles.container}>
          <h2 className={styles.articleTitle}>{blog?.name}</h2>
          <MarkdownRenderer className={styles.articleText} markdown={blog?.content}/>
        </Container>

      <Footer />
    </div>
  )
}

export default BlogDetailsPage
