import { Grid, makeStyles, Typography, Box, Container } from '@material-ui/core'
import profilePicture from '../assets/profilePicture.png'
import { Link } from 'react-router-dom'
import {AiFillLinkedin, AiFillGithub, AiFillYoutube, AiFillMail} from 'react-icons/ai';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#d7d9ceff',
    padding: '3rem'
  },
  profileImage: {
    height: '15rem',
    width: '13.2rem',
    borderRadius: '60%'
  },
  profileImageContainer: {
    display: 'flex',
    flexDirection: "column",
    padding: '2rem'
  },
  aboutContainer: {
    textAlign: 'left',
    padding: '2rem'
  },
  iconContainer:{
    padding: "2rem",
    color: "#0c7489ff",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.5rem",
    gap: "1rem"
  }
}))

export interface IAboutProps {}

export default function About (props: IAboutProps) {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            alignItems='center'
            justifyContent='center'
            className={styles.profileImageContainer}
          >
            <img className={styles.profileImage} src={profilePicture} />
            <div className={styles.iconContainer}>
                <Link to={"https://www.linkedin.com/in/harvey-mackie/"}><AiFillLinkedin/></Link>
                <Link to={"https://github.com/Harvey-Mackie"}><AiFillGithub/></Link>
                <Link to={"https://www.youtube.com/channel/UCoWmEVOJiZkv7tSqjWu7Uhw"}><AiFillYoutube/></Link>
                <Link to={"mailto:harveymackie@outlook.com"}><AiFillMail/></Link>
              </div>
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
      </Container>
    </div>
  )
}
