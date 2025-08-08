import { orders } from "../data/mock-data";
import styles from '../styles/table-styles.module.css'; // Reusing a generic table style

export function OrderManagement() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Buyurtmalar</h2>
        <p className={styles.cardDescription}>Oxirgi buyurtmalar ro'yxati.</p>
      </div>
      <div className={styles.cardContent}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableRow}>
              <th className={styles.tableHead}>ID</th>
              <th className={styles.tableHead}>Mijoz</th>
              <th className={styles.tableHead}>Miqdor</th>
              <th className={styles.tableHead}>Holat</th>
              <th className={styles.tableHead}>Sana</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {orders.map((order) => (
              <tr key={order.id} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.fontMedium}`}>{order.id}</td>
                <td className={styles.tableCell}>{order.customer}</td>
                <td className={styles.tableCell}>${order.amount}</td>
                <td className={styles.tableCell}>{order.status}</td>
                <td className={styles.tableCell}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
