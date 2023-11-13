import { Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
    container:{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
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
    const navItems = [
        {name: 'About', type: 'hash'},
        {name: 'Blog', type: 'link'},
        {name: 'Subscribe', type: 'hash'}
    ];

    return (
    <nav className={styles.container}>
        <Container style={{display: "flex", justifyContent: "flex-end"}}>
            {navItems.map((item) => (
                item.type === "hash" ? 
                        <NavHashLink className={styles.navItems} key={item.name} to={`/#${item.name}`}>
                            {item.name}
                        </NavHashLink>
                    :
                        <Link className={styles.navItems} key={item.name} to={`/${item.name}`}>
                            {item.name}
                        </Link>
                    
            
            ))}
        </Container>
    </nav>
)
}


