import styles from "./styles.module.css";

import bg from "../../assets/hero-bg.png";
import searchIcon from "../../assets/search.svg";
import pinIcon from "../../assets/pin.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
     
      <img src={bg} alt="" className={styles.bg} />

      <div className={styles.container}>
        
        <h1 className={styles.title}>
          Один клик <br />
          и работа в кармане
        </h1>

      
        <form
          className={styles.search}
          onSubmit={(e) => e.preventDefault()}
        >
         
          <div className={styles.field}>
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Должность или компания"
            />
          </div>

          <div className={styles.divider}></div>

        
          <div className={styles.field}>
            <img src={pinIcon} alt="" />
            <input
              type="text"
              placeholder="Город, Страна"
            />
          </div>

          <button type="submit">
            Поиск
          </button>
        </form>

      </div>
    </section>
  );
}
