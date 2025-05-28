import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import { FaBell, FaSearch, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Recruitment</h1>
      </div>
      <div className={styles.nav}>
        <span className={styles.navItem}>Jobs <span className={styles.jobCount}>8</span></span>
        <span className={styles.navItem}>Candidate <span className={styles.candidateBadge}>56</span></span>
        <span className={styles.navItem}>Career Site</span>
      </div>
      <div className={styles.right}>
        <FaPlus className={styles.plusIcon} />
        <FaSearch className={styles.icon} />
        <FaBell className={styles.icon} />

        <div className={styles.profileContainer}>
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with Bagus Fikri's actual image
            alt="Bagus Fikri"
            className={styles.profilePicture}
          />
          <span className={styles.profileName}>Bagus Fikri</span>
        </div>
      </div>
    </header>
  );
};

export default Header;