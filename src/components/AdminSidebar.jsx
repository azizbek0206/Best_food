"use client"

import { useState } from "react"
import { Home, Menu, ShoppingCart, Users, BarChart3, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react"

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", labelUz: "Boshqaruv paneli", icon: Home },
    { id: "menu", label: "Menu", labelUz: "Menyu boshqaruvi", icon: Menu },
    { id: "orders", label: "Orders", labelUz: "Buyurtmalar", icon: ShoppingCart },
    { id: "customers", label: "Customers", labelUz: "Mijozlar", icon: Users },
    { id: "analytics", label: "Analytics", labelUz: "Statistika", icon: BarChart3 },
    { id: "settings", label: "Settings", labelUz: "Sozlamalar", icon: Settings },
  ]

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-orange-500 text-white rounded-full p-1 hover:bg-orange-600 transition-colors"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">🍽️</span>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-sm text-gray-400">Uzbek Cuisine</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeSection === item.id ? "bg-orange-500 border-r-4 border-orange-300" : ""
              }`}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <div className="ml-3">
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="block text-xs text-gray-400">{item.labelUz}</span>
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-0 right-0 px-6">
        <button className="w-full flex items-center px-3 py-2 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors">
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Chiqish</span>}
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar
