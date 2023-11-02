import { Container, makeStyles } from '@material-ui/core'
import {AiFillLinkedin, AiFillGithub, AiFillYoutube, AiFillMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container:{
    
  },
  subscribeContainer:{
    backgroundColor: "#d7d9ceff",
    '& > div':{
      [theme.breakpoints.up('md')]: {
        display: "flex",
        '& > div':{
          width: "50%",
          margin: "3rem"
        }
      }
    },
  
  },
  subscribeContainerForm:{
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem",
    gap: 15,
    "& button":{
      padding: ".5rem",
      backgroundColor: "#119da4ff",
      color: "white",
      borderRadius: ".2rem"
    },
    "& input":{
      padding: ".4rem",
      borderRadius: ".2rem"
    }
  },
  footerContainer:{
    backgroundColor: "black",
    padding: "1.5rem 12.5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.5rem",
    gap: "1rem"
  }
}));

export interface IFooterProps {}

export default function Footer (props: IFooterProps) {

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.subscribeContainer}>
        <Container>
          <div>
            <h1>Subscribe to Weekly Snippets</h1>
            <p>
              Join a new community who are looking to <b>improve in all areas of
              life</b>. I share actionable advise, tips, learnings and advise directly
              to your inbox once per week.
            </p>
          </div>
          <div className={styles.subscribeContainerForm}>
            <input type='text' name='firstName' placeholder='First Name' />
            <input type='email' name='email' placeholder='Email Address' />
            <button type='button'>Subscribe</button>
          </div>
        </Container>
      </div>
      <div className={styles.footerContainer}>
        <Link to={"https://www.linkedin.com/in/harvey-mackie/"}><AiFillLinkedin/></Link>
        <Link to={"https://github.com/Harvey-Mackie"}><AiFillGithub/></Link>
        <Link to={"https://www.youtube.com/channel/UCoWmEVOJiZkv7tSqjWu7Uhw"}><AiFillYoutube/></Link>
        <Link to={"mailto:harveymackie@outlook.com"}><AiFillMail/></Link>
      </div>
    </div>
  )
}
