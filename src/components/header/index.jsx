import styles from "./styles.module.css";
import logo from "../../assets/Cooljob.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

     
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logo} alt="Cooljob logo" />
          </div>

          <nav className={styles.nav}>
            <a href="#">Поиск работы</a>
            <a href="#">Поиск стартапов</a>
          </nav>
        </div>

    
        <div className={styles.actions}>
          <a href="#" className={styles.register}>
            Регистрация
          </a>

          <button className={styles.login}>
            Вход
          </button>
        </div>

      </div>
    </header>
  );
}

