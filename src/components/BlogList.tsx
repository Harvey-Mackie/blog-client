import { Button, Container, Chip, Typography, Grid } from '@material-ui/core'

export interface IBlogListProps {}

export default function BlogList (props: IBlogListProps) {
  var blogs = [
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

  return (
    <Container id='blog'>
      <h1>The Blog</h1>
      <h2>Deep dives on Software, productivity, health and human potential.</h2>
      <Grid container spacing={3}>
        {blogs.slice(0, 9).map(blog => (
          <Grid item xs={4}>
            <Container
              style={{
                backgroundColor: 'lightgray',
                padding: '1rem',
                borderRadius: '0.5rem'
              }}
            >
              <h3>{blog.name}</h3>
              <Chip label={blog.category} color='secondary' />
              <Typography>{blog.summary}</Typography>
              <Button>Read more</Button>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
