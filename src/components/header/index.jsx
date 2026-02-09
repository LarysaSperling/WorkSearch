import styles from "./styles.module.css";
import logo from "../../assets/Cooljob.svg";


const navLinks = [
  {
    id: 1,
    title: "Поиск работы",
    href: "#",
  },
  {
    id: 2,
    title: "Поиск стартапов",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        
        <div className={styles.left}>
          
          <div className={styles.logo}>
            <img src={logo} alt="Cooljob logo" />
          </div>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.title}
              </a>
            ))}
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


