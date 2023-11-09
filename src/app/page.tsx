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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam
          sint sed perferendis voluptatum vel quis accusamus maxime, laborum, ex
          praesentium harum libero laudantium. Tempore fuga quisquam quas
          provident mollitia placeat nobis. Earum incidunt atque voluptate totam
          cupiditate impedit doloremque quae asperiores, pariatur, libero
          nesciunt! Sed, omnis hic, cumque atque provident mollitia itaque
          praesentium necessitatibus possimus perferendis iste est maiores
          tempora incidunt quo non voluptatibus, ea reiciendis iusto recusandae
          reprehenderit voluptatem optio. Amet, facere voluptatum numquam
          adipisci labore aperiam odio debitis ipsum iste iusto voluptate
          tempore doloribus ipsa sequi veniam minima hic ipsam! Incidunt autem
          ea doloremque laborum sit eveniet aspernatur possimus similique culpa
          itaque at dolorem reprehenderit suscipit nihil quidem voluptatem
          labore, necessitatibus et voluptatibus totam odit quia maxime.
          Doloremque dignissimos error magni quos atque quidem fugiat nostrum,
          illo molestias necessitatibus laboriosam doloribus quo aliquam dolorem
          molestiae sapiente cumque iusto sed rem. Doloremque rem enim
          voluptatibus reiciendis laboriosam adipisci ex, error recusandae autem
          magnam sit eos rerum maiores. Saepe nisi quos deserunt quam commodi
          beatae fugiat voluptates dicta eos quas veniam rerum, optio nostrum
          rem totam explicabo soluta maiores nobis quaerat repudiandae adipisci
          ex. Voluptatibus corrupti exercitationem, molestias odit tempora nemo
          expedita atque nihil facilis unde! Laborum aspernatur tempore expedita
          commodi iure accusamus unde enim corporis magni soluta, tempora
          exercitationem eveniet nemo ex fugiat id voluptate neque aut aliquam
          impedit sequi quibusdam! Nostrum labore laborum sint illo ducimus
          ipsum, odio fugit aliquam ad distinctio? Quo hic cumque delectus
          tempore, impedit laboriosam temporibus similique eaque culpa ut dolor
          et sit doloribus unde assumenda, cum enim vero, officiis maxime
          voluptatum illum ab quae consequuntur! Consequuntur, ex nam, eaque
          sapiente dicta quis quia laborum tenetur minus cumque reprehenderit
          officiis ea sunt, quisquam iure deleniti! Eveniet ducimus, tempore
          harum architecto voluptas voluptatum nemo, voluptates distinctio ex
          earum totam pariatur labore. Illo, dolorem ipsum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam
          sint sed perferendis voluptatum vel quis accusamus maxime, laborum, ex
          praesentium harum libero laudantium. Tempore fuga quisquam quas
          provident mollitia placeat nobis. Earum incidunt atque voluptate totam
          cupiditate impedit doloremque quae asperiores, pariatur, libero
          nesciunt! Sed, omnis hic, cumque atque provident mollitia itaque
          praesentium necessitatibus possimus perferendis iste est maiores
          tempora incidunt quo non voluptatibus, ea reiciendis iusto recusandae
          reprehenderit voluptatem optio. Amet, facere voluptatum numquam
          adipisci labore aperiam odio debitis ipsum iste iusto voluptate
          tempore doloribus ipsa sequi veniam minima hic ipsam! Incidunt autem
          ea doloremque laborum sit eveniet aspernatur possimus similique culpa
          itaque at dolorem reprehenderit suscipit nihil quidem voluptatem
          labore, necessitatibus et voluptatibus totam odit quia maxime.
          Doloremque dignissimos error magni quos atque quidem fugiat nostrum,
          illo molestias necessitatibus laboriosam doloribus quo aliquam dolorem
          molestiae sapiente cumque iusto sed rem. Doloremque rem enim
          voluptatibus reiciendis laboriosam adipisci ex, error recusandae autem
          magnam sit eos rerum maiores. Saepe nisi quos deserunt quam commodi
          beatae fugiat voluptates dicta eos quas veniam rerum, optio nostrum
          rem totam explicabo soluta maiores nobis quaerat repudiandae adipisci
          ex. Voluptatibus corrupti exercitationem, molestias odit tempora nemo
          expedita atque nihil facilis unde! Laborum aspernatur tempore expedita
          commodi iure accusamus unde enim corporis magni soluta, tempora
          exercitationem eveniet nemo ex fugiat id voluptate neque aut aliquam
          impedit sequi quibusdam! Nostrum labore laborum sint illo ducimus
          ipsum, odio fugit aliquam ad distinctio? Quo hic cumque delectus
          tempore, impedit laboriosam temporibus similique eaque culpa ut dolor
          et sit doloribus unde assumenda, cum enim vero, officiis maxime
          voluptatum illum ab quae consequuntur! Consequuntur, ex nam, eaque
          sapiente dicta quis quia laborum tenetur minus cumque reprehenderit
          officiis ea sunt, quisquam iure deleniti! Eveniet ducimus, tempore
          harum architecto voluptas voluptatum nemo, voluptates distinctio ex
          earum totam pariatur labore. Illo, dolorem ipsum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam
          sint sed perferendis voluptatum vel quis accusamus maxime, laborum, ex
          praesentium harum libero laudantium. Tempore fuga quisquam quas
          provident mollitia placeat nobis. Earum incidunt atque voluptate totam
          cupiditate impedit doloremque quae asperiores, pariatur, libero
          nesciunt! Sed, omnis hic, cumque atque provident mollitia itaque
          praesentium necessitatibus possimus perferendis iste est maiores
          tempora incidunt quo non voluptatibus, ea reiciendis iusto recusandae
          reprehenderit voluptatem optio. Amet, facere voluptatum numquam
          adipisci labore aperiam odio debitis ipsum iste iusto voluptate
          tempore doloribus ipsa sequi veniam minima hic ipsam! Incidunt autem
          ea doloremque laborum sit eveniet aspernatur possimus similique culpa
          itaque at dolorem reprehenderit suscipit nihil quidem voluptatem
          labore, necessitatibus et voluptatibus totam odit quia maxime.
          Doloremque dignissimos error magni quos atque quidem fugiat nostrum,
          illo molestias necessitatibus laboriosam doloribus quo aliquam dolorem
          molestiae sapiente cumque iusto sed rem. Doloremque rem enim
          voluptatibus reiciendis laboriosam adipisci ex, error recusandae autem
          magnam sit eos rerum maiores. Saepe nisi quos deserunt quam commodi
          beatae fugiat voluptates dicta eos quas veniam rerum, optio nostrum
          rem totam explicabo soluta maiores nobis quaerat repudiandae adipisci
          ex. Voluptatibus corrupti exercitationem, molestias odit tempora nemo
          expedita atque nihil facilis unde! Laborum aspernatur tempore expedita
          commodi iure accusamus unde enim corporis magni soluta, tempora
          exercitationem eveniet nemo ex fugiat id voluptate neque aut aliquam
          impedit sequi quibusdam! Nostrum labore laborum sint illo ducimus
          ipsum, odio fugit aliquam ad distinctio? Quo hic cumque delectus
          tempore, impedit laboriosam temporibus similique eaque culpa ut dolor
          et sit doloribus unde assumenda, cum enim vero, officiis maxime
          voluptatum illum ab quae consequuntur! Consequuntur, ex nam, eaque
          sapiente dicta quis quia laborum tenetur minus cumque reprehenderit
          officiis ea sunt, quisquam iure deleniti! Eveniet ducimus, tempore
          harum architecto voluptas voluptatum nemo, voluptates distinctio ex
          earum totam pariatur labore. Illo, dolorem ipsum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam
          sint sed perferendis voluptatum vel quis accusamus maxime, laborum, ex
          praesentium harum libero laudantium. Tempore fuga quisquam quas
          provident mollitia placeat nobis. Earum incidunt atque voluptate totam
          cupiditate impedit doloremque quae asperiores, pariatur, libero
          nesciunt! Sed, omnis hic, cumque atque provident mollitia itaque
          praesentium necessitatibus possimus perferendis iste est maiores
          tempora incidunt quo non voluptatibus, ea reiciendis iusto recusandae
          reprehenderit voluptatem optio. Amet, facere voluptatum numquam
          adipisci labore aperiam odio debitis ipsum iste iusto voluptate
          tempore doloribus ipsa sequi veniam minima hic ipsam! Incidunt autem
          ea doloremque laborum sit eveniet aspernatur possimus similique culpa
          itaque at dolorem reprehenderit suscipit nihil quidem voluptatem
          labore, necessitatibus et voluptatibus totam odit quia maxime.
          Doloremque dignissimos error magni quos atque quidem fugiat nostrum,
          illo molestias necessitatibus laboriosam doloribus quo aliquam dolorem
          molestiae sapiente cumque iusto sed rem. Doloremque rem enim
          voluptatibus reiciendis laboriosam adipisci ex, error recusandae autem
          magnam sit eos rerum maiores. Saepe nisi quos deserunt quam commodi
          beatae fugiat voluptates dicta eos quas veniam rerum, optio nostrum
          rem totam explicabo soluta maiores nobis quaerat repudiandae adipisci
          ex. Voluptatibus corrupti exercitationem, molestias odit tempora nemo
          expedita atque nihil facilis unde! Laborum aspernatur tempore expedita
          commodi iure accusamus unde enim corporis magni soluta, tempora
          exercitationem eveniet nemo ex fugiat id voluptate neque aut aliquam
          impedit sequi quibusdam! Nostrum labore laborum sint illo ducimus
          ipsum, odio fugit aliquam ad distinctio? Quo hic cumque delectus
          tempore, impedit laboriosam temporibus similique eaque culpa ut dolor
          et sit doloribus unde assumenda, cum enim vero, officiis maxime
          voluptatum illum ab quae consequuntur! Consequuntur, ex nam, eaque
          sapiente dicta quis quia laborum tenetur minus cumque reprehenderit
          officiis ea sunt, quisquam iure deleniti! Eveniet ducimus, tempore
          harum architecto voluptas voluptatum nemo, voluptates distinctio ex
          earum totam pariatur labore. Illo, dolorem ipsum.
        </p>
      </main>
    </>
  );
}
