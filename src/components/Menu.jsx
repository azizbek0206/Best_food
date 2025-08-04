"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/menu.css"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  
  const categories = [
    { id: "all", name: "Barchasi" },
    { id: "breakfast", name: "Nonushta" },
    { id: "main", name: "Asosiy taomlar" },
    { id: "drinks", name: "Ichimliklar" },
    { id: "desserts", name: "Shirinliklar" },
  ]
  const [menu,setMenu] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    fetch('http://192.168.100.11:8000/api/Foods/')
    .then((response) => {
      if (!response.ok) {
        throw   Error("Serverdan xatolik")
      }
      console.log(response);
      return response.json()
     })
     .then((data) => {
        setMenu(data)
        console.log(data);
        
     })
     .catch(err =>{
      console.error("xatolik",err);
      setError("Malumotlarni olishda xatolik");
      setLoading(false)
     })
  },[])

  const menuItems = [

  ]


const filteredItems =
  activeCategory === "all"? menuItems  : menuItems.filter((item) => item.category === activeCategory);

console.log(filteredItems);

  return (
    <div className="menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-title">Bizning menyumiz</h1>
          <p className="menu-description">Eng mazali va sifatli taomlarni tanlang</p>
        </div>
      </section>

      {/* Categories */}
      <section className="menu-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {menu.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                </div>
                <div className="menu-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-footer">
                    <span className="price">{item.price} so'm</span>
                    <button className="btn-primary small">Buyurtma</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
