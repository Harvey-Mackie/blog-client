import { Button, Container, Chip, Typography, Grid, makeStyles } from '@material-ui/core'
import profilePicture from '../assets/profilePicture.png'


const useStyles = makeStyles(theme => ({
  container:{
    textAlign: "center",
    padding: "1rem 5rem"
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

const blogs = [
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out.This is just a sample article that I'm testing out. This is just a sample article that I'm testing out. This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'The Art of Focus',
    category: 'Productivity',
    summary: "This is just a sample article that I'm testing out"
  },
  {
    name: 'How to become a Java Engineer in 2023',
    category: 'Software - Java',
    summary: "This is just a sample article that I'm testing out"
  }
]

export interface IBlogListProps {}

export default function BlogList (props: IBlogListProps) {
  
  const styles = useStyles();

  return (
    <Container id='blog' className={styles.container}>
      <h2>The Blog</h2>
      <p>Deep dives on Software, productivity, health and human potential.</p>
      <br/>
      <Grid container spacing={3}>
      
        {blogs.slice(0, 4).map(blog => (
          <Grid item xs={12} sm={4}>
            <div className={styles.blogCards}>
              <div className={styles.blogImageContainer}>
                <img className={styles.blogImage} src={profilePicture} />
              </div>
              <div className={styles.blogCardsInner}>
                <h4 className={styles.blodCardsInnerTitle}>{blog.name.toUpperCase()}</h4>
                <p>{blog.summary}</p>
                <br/>
                <a href=""><b>READ MORE...</b></a>
              </div>
              
            </div>
          </Grid>
        ))}
      
      </Grid>
    </Container>
  )
}
