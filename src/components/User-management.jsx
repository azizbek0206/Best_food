import { users } from "../data/mock-data";
import styles from '../styles/table-styles.module.css'; // Reusing a generic table style

export function UserManagement() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Foydalanuvchilar</h2>
        <p className={styles.cardDescription}>Barcha ro'yxatdan o'tgan foydalanuvchilar ro'yxati.</p>
      </div>
      <div className={styles.cardContent}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableRow}>
              <th className={styles.tableHead}>ID</th>
              <th className={styles.tableHead}>Ism</th>
              <th className={styles.tableHead}>Email</th>
              <th className={styles.tableHead}>Rol</th>
              <th className={styles.tableHead}>Holat</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {users.map((user) => (
              <tr key={user.id} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.fontMedium}`}>{user.id}</td>
                <td className={styles.tableCell}>{user.name}</td>
                <td className={styles.tableCell}>{user.email}</td>
                <td className={styles.tableCell}>{user.role}</td>
                <td className={styles.tableCell}>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
