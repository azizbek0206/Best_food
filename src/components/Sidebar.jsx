import { Home, Users, Package, ShoppingCart, Settings } from 'lucide-react';
import { useState } from 'react';
import styles from '../styles/sidebar.module.css'; // Import CSS Module

export function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { name: "Dashboard", icon: Home, tab: "dashboard" },
    { name: "Foydalanuvchilar", icon: Users, tab: "users" },
    { name: "Mahsulotlar", icon: Package, tab: "products" },
    { name: "Buyurtmalar", icon: ShoppingCart, tab: "orders" },
    { name: "Sozlamalar", icon: Settings, tab: "settings" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <a href="#" className={styles.logo}>
          <Package className={styles.logoIcon} />
          <span>Admin Panel</span>
        </a>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.tab}
            className={`${styles.navItem} ${activeTab === item.tab ? styles.active : ''}`}
            onClick={() => setActiveTab(item.tab)}
          >
            <item.icon className={styles.navIcon} />
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
