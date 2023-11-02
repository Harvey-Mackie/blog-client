import { Grid, makeStyles, Typography, Box } from '@material-ui/core'
import profilePicture from '../assets/profilePicture.png'


const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#d7d9ceff',
    padding: '3rem'
  },
  profileImage: {
    height: '15rem',
    width: '14rem',
    borderRadius: '60%'
  },
  profileImageContainer: {
    display: 'flex',
    padding: '2rem'
  },
  aboutContainer: {
    textAlign: 'left'
  }
}))

export interface IAboutProps {}

export default function About (props: IAboutProps) {
  const styles = useStyles()

  return (
    <Grid container className={styles.container}>
      <Grid
        item
        xs={12}
        sm={6}
        alignItems='center'
        justifyContent='center'
        className={styles.profileImageContainer}
      >
        <img className={styles.profileImage} src={profilePicture} />
      </Grid>
      <Grid 
        item 
        xs={12} 
        sm={6} 
        className={styles.aboutContainer}
      >
          <h1>Hey, I'm Harvey.</h1>
          <h3> I'm a Software Engineer who has a <mark>passion for achieving high performance</mark> in all areas of life. </h3>
          <p> My articles range from <b>Software Engineering</b> topics and practices to <b>Health</b> tips.</p>
          <p> I've been balancing triathlon and my career in Software for the past two years and have managed to achieve great things in both areas of my life - <b> sub 10 hour Ironman and Colleague of the Year at Lloyds - in the same year </b>.</p>
      </Grid>
    </Grid>
  )
}
