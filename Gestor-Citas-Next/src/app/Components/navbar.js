import Link from 'next/link';
import styles from './navbar.module.css'; // Asegúrate de usar .module.css

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/">Home</Link></li>
                <li className={styles.listItem}><Link href="/reservas">Reservas</Link></li>
                <li className={styles.listItem}><Link href="/quienes-somos">Creditos</Link></li>
                <li className={styles.listItem}><Link href="/contactos">Ayuda</Link></li>
            </ul>
            <img src=".\frutilla.png" alt="Logo" className={styles.logo} />
        </div>
    );
};

export default Navbar;
