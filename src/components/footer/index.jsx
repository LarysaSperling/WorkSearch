import styles from "./styles.module.css";
import logo from "../../assets/footer/logo.svg";



import linkedin from "../../assets/footer/linkedin.svg";
import google from "../../assets/footer/google.svg";
import twitter from "../../assets/footer/twitter.svg";
import facebook from "../../assets/footer/facebook.svg";

const cities = [
  "Осака",
  "Киото",
  "Токио",
  "Хаконе",
  "Нагоя",
  "Томаму",
  "Йокогама",
  "Нара",
  "Саппоро",
  "Кобе",
];


const socials = [
  { id: 1, icon: linkedin, link: "#" },
  { id: 2, icon: google, link: "#" },
  { id: 3, icon: twitter, link: "#" },
  { id: 4, icon: facebook, link: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <h3 className={styles.title}>
          Популярные города
        </h3>

        <div className={styles.cities}>
          {cities.map((city, index) => (
            <a key={index} href="#">
              {city}
            </a>
          ))}
        </div>

       
        <div className={styles.line}></div>

       
        <div className={styles.bottom}>

         
          <div className={styles.logo}>
            <img src={logo} alt="cooljob logo" />
          </div>

    
          <div className={styles.socials}>
            {socials.map((soc) => (
              <a key={soc.id} href={soc.link}>
                <img src={soc.icon} alt="" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
