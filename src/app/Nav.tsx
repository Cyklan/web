import Image from "next/image";
import styles from "./nav.module.scss";
import { Staatliches } from "next/font/google";

const font = Staatliches({ weight: "400", subsets: ["latin"] });

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <p className={`${styles.logo} ${font.className}`}>FAHLE</p>
      <ul className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <Image width={100} height={100} src="/jumpyman.svg" alt="" className={styles.image} />
    </nav>
  );
};
