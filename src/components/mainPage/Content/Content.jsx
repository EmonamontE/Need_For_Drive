import styles from "./content.module.css";

const Content = () => (
  <main>
    <h1 className={ styles.purpose }>Каршеринг</h1>
    <h2 className={ styles.title }>Need for drive</h2>
    <p className={ styles.description }>Поминутная аренда авто твоего города</p>
    <button className={ styles.button }>Забронировать</button>
  </main>
);

export default Content;
