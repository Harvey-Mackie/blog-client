import { Container, makeStyles } from '@material-ui/core';
import { NavHashLink } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
    container:{
        backgroundColor: "#d7d9ceff",
        fontWeight: 600,
        padding: "1rem"
    },
    navItems:{
        padding: "1rem",
        textDecoration: "none"
    }
}))

export interface INavbarProps {
}


export default function Navbar (props: INavbarProps) {
  
    const styles = useStyles();
    const navItems = ['About', 'Blog', 'Subscribe'];

    return (
    <nav className={styles.container}>
        <Container style={{display: "flex", justifyContent: "flex-end"}}>
            {navItems.map((item) => (
            <NavHashLink className={styles.navItems} key={item} to={`/#${item}`}>
                {item}
            </NavHashLink>
            ))}
        </Container>
    </nav>
)
}


