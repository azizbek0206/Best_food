"use client"

import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import Dashboard from "./Dashboard"
import MenuManagement from "./MenuManagement"

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "menu":
        return <MenuManagement />
      case "orders":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Buyurtmalar bo'limi</h1>
          </div>
        )
      case "customers":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Mijozlar bo'limi</h1>
          </div>
        )
      case "analytics":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Statistika bo'limi</h1>
          </div>
        )
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Sozlamalar bo'limi</h1>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  )
}

export default AdminPanel
