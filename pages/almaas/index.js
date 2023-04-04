import Image from "next/image"
import styles from "./index.module.css"
import meme from "@/public/images/fireship-meme.jpeg"

export default function Almaas() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Headline</h1>
          <p>by almaas</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi dolores aliquam, molestiae numquam</p>
          <Image src={meme} alt="programming meme" width={400} className={styles.image} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi dolores aliquam, molestiae numquam ratione quibusdam eius illo quisquam exercitationem similique voluptatum reprehenderit obcaecati doloremque recusandae optio laboriosam veritatis ex.</p>
        </div>
      </section>
    </>
  )
}