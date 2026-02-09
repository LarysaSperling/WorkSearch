import styles from "./styles.module.css";
import sony from "../../assets/jobs/sony.svg";
import facebook from "../../assets/jobs/facebook.svg";
import coca from "../../assets/jobs/coca-cola.svg";

import locationIcon from "../../assets/jobs/location.svg";

const jobs = [
  {
    id: 1,
    category: "Финансы",
    color: "#4C6FFF",
    title:
      "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    companyLogo: sony,
    company: "Sony",
    time: "3 дня назад",
  },
  {
    id: 2,
    category: "Продажи",
    color: "#FF4CF0",
    title: "Специалист по продажам",
    location: "Киото, Япония",
    companyLogo: facebook,
    company: "Facebook",
    time: "7 дней назад",
  },
  {
    id: 3,
    category: "Служба поддержки",
    color: "#3BCB5E",
    title: "Оператор колл центра",
    location: "Токио, Япония",
    companyLogo: coca,
    company: "CocaCola",
    time: "1 день назад",
  },
  {
    id: 4,
    category: "Мультимедиа",
    color: "#FF8A00",
    title: "Системный администратор",
    location: "Токио, Япония",
    companyLogo: sony,
    company: "Sony",
    time: "3 дня назад",
  },
  {
    id: 5,
    category: "Дизайн",
    color: "#FF4C4C",
    title:
      "Дизайнер интерьера в профессиональную студию",
    location: "Йокогама, Япония",
    companyLogo: facebook,
    company: "Facebook",
    time: "7 дней назад",
  },
  {
    id: 6,
    category: "Грузоперевозки",
    color: "#000000",
    title: "Водитель на дальние дистанции",
    location: "Кобе, Япония",
    companyLogo: coca,
    company: "CocaCola",
    time: "1 день назад",
  },
];

export default function Jobs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>Новые вакансии</h2>
        <p className={styles.subtitle}>
          Найди работу своей мечты прямо сейчас
        </p>

        <div className={styles.grid}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.card}>
              
          
              <div className={styles.category}>
                <span
                  style={{ background: job.color }}
                  className={styles.dot}
                ></span>
                {job.category}
              </div>

             <div className={styles.content}>
  <h3 className={styles.jobTitle}>
    {job.title}
  </h3>

  <div className={styles.location}>
    <img src={locationIcon} alt="" />
    {job.location}
  </div>
</div>

              <div className={styles.company}>
                <img src={job.companyLogo} alt="" />
                <span>
                  {job.company}, {job.time}
                </span>
              </div>

            </div>
          ))}
        </div>

        <div className={styles.btnWrap}>
          <button className={styles.btn}>
            Все вакансии
          </button>
        </div>

      </div>
    </section>
  );
}
