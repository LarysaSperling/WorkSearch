import styles from "./styles.module.css";

import finance from "../../assets/categories/finance.svg";
import transport from "../../assets/categories/transport.svg";
import design from "../../assets/categories/design.svg";
import restaurant from "../../assets/categories/restaurant.svg";
import medicine from "../../assets/categories/medicine.svg";
import multimedia from "../../assets/categories/multimedia.svg";
import support from "../../assets/categories/support.svg";
import management from "../../assets/categories/management.svg";
import sales from "../../assets/categories/sales.svg";
import arrow from "../../assets/categories/arrow.svg"; 


const categories = [
  { id: 1, title: "Финансы", icon: finance },
  { id: 2, title: "Грузоперевозки", icon: transport },
  { id: 3, title: "Дизайн", icon: design },
  { id: 4, title: "Ресторанный бизнес", icon: restaurant },
  { id: 5, title: "Медицина", icon: medicine },
  { id: 6, title: "Мультимедиа", icon: multimedia },
  { id: 7, title: "Служба поддержки", icon: support },
  { id: 8, title: "Менеджмент", icon: management },
  { id: 9, title: "Продажи", icon: sales },
  {
    id: 10,
    title: "Больше категорий",
    icon: arrow,
    more: true, 
  },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Работа по категориям</h2>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={
                cat.more ? styles.moreCard : styles.card
              }
            >
              <img
                className={styles.icon}
                src={cat.icon}
                alt={cat.title}
              />

              <p className={styles.name}>
                {cat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
