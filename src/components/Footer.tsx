import { Container, TextField, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import {AiFillLinkedin, AiFillGithub, AiFillYoutube, AiFillMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { subscribe } from '../api/action';
import { toast } from 'react-toastify';
import { Formik, FormikHelpers } from 'formik';

const useStyles = makeStyles(theme => ({
  container:{
    
  },
  subscribeContainer:{
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
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
    width: "30rem",
    padding: "1rem 1rem",
    gap: 15,
    "& button":{
      padding: ".5rem",
      backgroundColor: theme.palette.secondary.contrastText,
      color: "white",
      borderRadius: ".2rem"
    },
    "& input":{
      borderRadius: ".2rem",
      backgroundColor: "white"
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

  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  const styles = useStyles();

  async function callSubscribe(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    await subscribe(name, email)
    setName("")
    setEmail("")
    toast.success('Thank you for subscribing!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.subscribeContainer}>
        <Container>
          <div id="Subscribe">
            <h1>Subscribe to Weekly Snippets</h1>
            <p>
              Join a new community who are looking to <b>improve in all areas of
              life</b>. I share actionable advise, tips, learnings and advise directly
              to your inbox once per week.
            </p>
          </div>
          <Formik 
            initialValues={{ name: '', email: '' }}
            validate={values => {} } 
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 400);
            }}            >
            <form onSubmit={callSubscribe} className={styles.subscribeContainerForm}>
              <TextField required value={name} type='text' label='First Name' variant="filled" onChange={e => setName(e.target.value)} />
              <TextField required value={email} type='email' label='Email Address' variant="filled" onChange={e => setEmail(e.target.value)}/>
              <button type='submit'>Subscribe</button>
            </form>
          </Formik>
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
