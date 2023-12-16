import { FunctionComponent, useEffect, useState } from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { BlogDetails, BlogSummary } from '../api/models/Blog'
import { GetBlog } from '../api/blog'
import MarkdownRenderer from '../components/MarkdownRenderer'


const useStyles = makeStyles(theme => ({
  container:{
    textAlign: "center",
    padding: "4rem 1.5rem 5rem 1.5rem",
    minHeight: "70vh",
    maxWidth: "100ch"
  },
  imageContainer:{
    maxHeight: "22rem"
  },
  articleTitle:{
    textAlign: "center",
    fontSize: "2.5rem",
    lineHeight: "2"
  },
  articleText:{
    textAlign: "left",
    fontSize: "1.2rem",
    "& p":{
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
    const blogsResponse = await GetBlog(1) as BlogDetails;
    setBlog(blogsResponse); 
  }

  useEffect(() => {
    initBlogs();
  }, []);


  const date = new Date(blog?.dateCreated || "");
  
    return (
    <>
        <Container className={styles.container}>
          <h2 className={styles.articleTitle}>{blog?.name}</h2>
          <p><small>{date.toLocaleDateString()}</small></p>
          <hr/>
          <br/>
          <MarkdownRenderer className={styles.articleText} markdown={blog?.content}/>
        </Container>
    </>
  )
}

export default BlogDetailsPage
