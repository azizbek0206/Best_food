import { Users, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { users, products, orders } from "../data/mock-data";
import styles from '../styles/dashboard-overview.module.css'; // Import CSS Module

export function DashboardOverview() {
  const totalUsers = users.length;
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.amount), 0).toFixed(2);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Jami Foydalanuvchilar</h3>
          <Users className={styles.cardIcon} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardValue}>{totalUsers}</div>
          <p className={styles.cardDescription}>
            Oxirgi oydagi {'+20.1%'}
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Jami Mahsulotlar</h3>
          <Package className={styles.cardIcon} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardValue}>{totalProducts}</div>
          <p className={styles.cardDescription}>
            Jami ombordagi mahsulotlar
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Jami Buyurtmalar</h3>
          <ShoppingCart className={styles.cardIcon} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardValue}>{totalOrders}</div>
          <p className={styles.cardDescription}>
            Oxirgi oydagi {'+15%'}
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Umumiy Daromad</h3>
          <DollarSign className={styles.cardIcon} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardValue}>${totalRevenue}</div>
          <p className={styles.cardDescription}>
            Oxirgi oydagi {'+10%'}
          </p>
        </div>
      </div>
    </div>
  );
}
