import {Link} from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/books">Books</Link>
            </div>
        </nav>
    );
};

export default Navbar;