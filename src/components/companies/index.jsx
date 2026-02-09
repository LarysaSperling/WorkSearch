import styles from "./styles.module.css";

import disney from "../../assets/companies/disney.svg";
import facebook from "../../assets/companies/facebook.svg";
import microsoft from "../../assets/companies/microsoft.svg";
import sony from "../../assets/companies/sony.svg";
import cocaCola from "../../assets/companies/coca-cola.svg";


const companies = [
  { id: 1, img: disney, name: "Disney" },
  { id: 2, img: facebook, name: "Facebook" },
  { id: 3, img: microsoft, name: "Microsoft" },
  { id: 4, img: sony, name: "Sony" },
  { id: 5, img: cocaCola, name: "Coca-Cola" },
];

export default function Companies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <p className={styles.text}>
          Помогаем найти работу:
        </p>

        <div className={styles.logos}>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.img}
              alt={company.name}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

