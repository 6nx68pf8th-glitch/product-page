import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.page}>
        <title>
          Philip Jewelry
        </title>
      </header>

      <section className="products">
        <div>
          <img src="" alt="" />
          <h2>
            {/* Price + Promo? */}
          </h2>
          <h3>
            {/* Title */}
          </h3>
          <h4>
            {/* Brand */}
          </h4>
          <p>
            {/* Descritpion */}
          </p>
          <button>
            {/* Add to Cart */}
          </button>

        </div>
      </section>
    </div>
  );
}
