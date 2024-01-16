import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import profile from './profile.png';

function Navbar(){
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <p>Rapid-Tasks</p>
                <Link to='/'>
                    <a>Home</a>
                </Link>
            </div>
            <div className={styles.profile}>
                <img src={profile} alt="profile"/>
            </div>
        </section>
    )
}

export default Navbar;