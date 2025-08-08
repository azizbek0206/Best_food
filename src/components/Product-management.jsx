import { products } from "../data/mock-data";
import styles from '../styles/table-styles.module.css' // Reusing a generic table style

export function ProductManagement() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Mahsulotlar</h2>
        <p className={styles.cardDescription}>Barcha mahsulotlar ro'yxati.</p>
      </div>
      <div className={styles.cardContent}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableRow}>
              <th className={styles.tableHead}>ID</th>
              <th className={styles.tableHead}>Nomi</th>
              <th className={styles.tableHead}>Kategoriya</th>
              <th className={styles.tableHead}>Narxi</th>
              <th className={styles.tableHead}>Omborda</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {products.map((product) => (
              <tr key={product.id} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.fontMedium}`}>{product.id}</td>
                <td className={styles.tableCell}>{product.name}</td>
                <td className={styles.tableCell}>{product.category}</td>
                <td className={styles.tableCell}>${product.price}</td>
                <td className={styles.tableCell}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
