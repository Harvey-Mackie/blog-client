import { Button, Container, Chip, Typography, Grid, makeStyles, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import profilePicture from '../assets/profilePicture.png'
import { GetBlogs } from '../api/blog';
import { useEffect, useState } from 'react';
import { BlogSummary } from '../api/models/Blog';
import { Link } from 'react-router-dom';
import { HttpResponse } from '../api/models/HttpResponse';


const useStyles = makeStyles(theme => ({
  container:{
    textAlign: "center",
    padding: "1rem 5rem 2rem 5rem"
  },
  blogImage:{
    height: "100%",
    width: "100%"
  },
  blogImageContainer:{
    height: "12rem"
  },
  blogCards:{
    border: ".2rem solid #d7d9ceff",
    borderRadius: '0.5rem',
    height: '100%',
    cursor: "pointer"
  },
  blogCardsInner: {
    padding: "1rem 1.2rem",
    textAlign: "left"
  },
  blodCardsInnerTitle:{
    textAlign: "center",
    fontSize: "1.2rem"
  }
}))

export interface IBlogListProps {
  //when true, only display 6 elements and have an option to view the full list via navigating to correct page
  isSummary: boolean;
  isEditPage?: boolean; 
}

export default function BlogList ({ isSummary, isEditPage = false }: IBlogListProps) {
  
  const [blogs, setBlogs] = useState<BlogSummary[]>();
  const [summaryBlogsToShow, setSummaryBlogsToShow] = useState<number>(6);

  async function initBlogs(){
    const blogsResponse = await GetBlogs();
    setBlogs(blogsResponse); 
  }

  function seeMore(){
    if(blogs && summaryBlogsToShow < blogs?.length){
      setSummaryBlogsToShow(summaryBlogsToShow + 6);
    }
  }

  useEffect(() => {
    initBlogs();
  }, []);

  const styles = useStyles();
  const blogsToRender = isSummary ? blogs?.slice(0,summaryBlogsToShow) : blogs;

  return (
    <section id='Blog'>
      <Container className={styles.container}>
        {
          isEditPage ? <></>
          :
          <>
            <h2>The Blog</h2>
            <p>Deep dives on Software, productivity, health and human potential.</p>
            <br/>
          </>
        }
        <Grid container spacing={3}>
        
          {blogsToRender?.map((blog:BlogSummary) => (
            <Grid item xs={12} sm={4}>
              <Link 
                to={!isEditPage ? `/blog/${blog?.id}` : `/admin/edit/${blog.id}` } 
                style={{ textDecoration: 'none' }}>
                <Card
                  variant="outlined"
                >
                  {
                    blog.image ? 
                      <CardMedia
                        component="img"
                        height="240"
                        image={blog.image + ''}
                      />
                    : <></>
                  }
                  <CardContent>
                    <Typography gutterBottom variant="h5">{blog.name.toUpperCase()}</Typography>
                    <Typography variant="body1">{blog.summary}</Typography>
                    <p><small>{new Date(blog.dateCreated || "").toLocaleDateString()}</small></p>
                  </CardContent>
                </Card>
              </Link>
                
            </Grid>
          ))}
        
        </Grid>
        {
          isSummary && blogs && summaryBlogsToShow < blogs.length  ? 
          <div  style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
            <Button onClick={seeMore} variant="outlined">See more</Button>
          </div>
          :
          <></>
        }
      </Container>
    </section>
  )
}
