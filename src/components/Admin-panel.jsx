"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Sayt } from "./Sayt";
import { DashboardOverview } from "./Dashboard-overview";
import { UserManagement } from "./User-management";
import { ProductManagement } from "./Product-management";
import { OrderManagement } from "./Order-management";
import styles from '../styles/admin-panel.module.css'; // Import CSS Module

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <DashboardOverview />
            <div className={styles.dashboardGrid}>
              <UserManagement />
              <ProductManagement />
              <OrderManagement />
            </div>
          </>
        );
      case "users":
        return <UserManagement />;
      case "products":
        return <ProductManagement />;
      case "orders":
        return <OrderManagement />;
      case "settings":
        return (
          <div className={styles.settingsPlaceholder}>
            Sozlamalar sahifasi tez orada...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.mainContent}>
        <Sayt />
        <main className={styles.contentArea}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
