import { Staatliches } from "next/font/google";
import { Nav } from "./Nav";
import styles from "./page.module.scss";
import Image from "next/image";

const font = Staatliches({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles["hero-content"]}>
            <span className={`${font.className} ${styles["hero-text"]}`}>
              i&apos;m nils and I make cool shit <br /> for phones and the
              internet
              <div className={styles["rotate-wrapper"]}>
                <button>Look at cool shit!</button>
              </div>
            </span>
          </div>
          <div className={styles["hero-image"]}>
            <Image
              height={400}
              width={400}
              src="/jumpyman.svg"
              alt=""
              className={styles.image}
            />
            <Image
              height={400}
              width={400}
              src="/blob1.svg"
              alt=""
              className={styles.blob}
            />
          </div>
        </div>
      </main>
    </>
  );
}
