import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


import "./styles/global.css"
import "./styles/admin-panel.module.css" 
import "./styles/sidebar.module.css" 
import "./styles/table-styles.module.css" 
import "./styles/form-styles.module.css" 
import "./styles/login.css" 


import { Sidebar } from "./components/sidebar"
import { AdminPanel } from "./components/admin-panel"
import { DashboardOverview } from "./components/Dashboard-overview"
import { ProductManagement } from "./components/Product-management"
import { OrderManagement } from "./components/Order-management"
import { Sayt } from "./components/Sayt"
import { AddOrderForm } from "./components/add-order-form"
import { AddProductForm } from "./components/add-product-form"
import { AddUserForm } from "./components/add-user-form"
import { Login } from "./components/login"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dashboard" element={< DashboardOverview/>} />
            <Route path="/order" element={< OrderManagement/>} />
            <Route path="/sidebar" element={< Sidebar/>} />
            <Route path="/product" element={< ProductManagement/>} />
            <Route path="/sayt" element={< Sayt/>} />
            <Route path="/addorder" element={<AddOrderForm />} />
            <Route path="/addproduct" element={<AddProductForm />} />
            <Route path="/adduser" element={<AddUserForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

