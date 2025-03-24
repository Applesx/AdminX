import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="ADMINX Logo" width={130} height={40} />
        </div>
        <div className={styles.welcome}>
          <h1>
            Welcome, <span className={styles.username}>Amir</span>
          </h1>
          <p>Here's what's happening in your inventory</p>
        </div>
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <Image src="/settings.svg" alt="Settings" width={24} height={24} />
          </button>
          <button className={styles.iconButton}>
            <Image src="/notifications.svg" alt="Notifications" width={24} height={24} />
          </button>
          <button className={styles.iconButton}>
            <Image src="/profile.svg" alt="Profile" width={24} height={24} />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.shelf}>
          <div className={styles.shelfHeader}>
            <h2>Shelf 1</h2>
          </div>
          <p className={styles.shelfDescription}>
            Vape projects we have in the <span className={styles.location}>West cost</span>
          </p>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}></div>
            <div className={styles.projectCard}></div>
            <div className={styles.projectCard}></div>
            <div className={styles.projectCard}></div>
          </div>
        </section>

        <section className={styles.shelf}>
          <div className={styles.shelfHeader}>
            <h2>Shelf 2</h2>
          </div>
          <p className={styles.shelfDescription}>
            Vape projects we have in the <span className={styles.location}>East cost</span>
          </p>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}></div>
            <div className={styles.projectCard}></div>
            <div className={styles.projectCard}></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <button className={styles.addShelfButton}>+Add Shelf</button>
        <button className={styles.addBookButton}>+Add book</button>
      </footer>
    </div>
  )
}

