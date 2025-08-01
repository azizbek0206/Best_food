"use client"

import { useState } from "react"
import "../styles/menu.css"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const [menudata,setMenuData] = useState([])

  const categories = [
    { id: "all", name: "Barchasi" },
    { id: "breakfast", name: "Nonushta" },
    { id: "main", name: "Asosiy taomlar" },
    { id: "drinks", name: "Ichimliklar" },
    { id: "desserts", name: "Shirinliklar" },
  ]

  const menuItems = [
    {
      id: 1,
      name: "O'zbek oshi",
      price: "40,000",
      description: "An'anaviy o'zbek oshi, go'sht va sabzavotlar bilan",
      image: "https://makepedia.uz/wp-content/uploads/2018/09/osh-tayyorlash.jpg",
      category: "main",
    },
    {
      id: 2,
      name: "Lag'mon",
      price: "35,000",
      description: "Qo'lda tortilgan lag'mon, go'sht va sabzavotlar bilan",
      image: "https://t4.ftcdn.net/jpg/02/31/48/03/360_F_231480324_BqyB5EmbS8LQg2uPF9SZHLovPQK8MfuO.jpg",
      category: "main",
    },
    {
      id: 3,
      name: "Manti",
      price: "30,000",
      description: "Bug'da pishirilgan manti, go'sht va piyoz bilan",
      image: "https://cdn.shopify.com/s/files/1/0748/1684/8190/files/20240624181502-traditional-20uzbek-20pork-20dumplings-20with-20ajika-20sauce.png?v=1719252905&width=1600&height=900",
      category: "main",
    },
    {
      id: 4,
      name: "Somsa",
      price: "8,000",
      description: "Tandir somsasi, go'sht va piyoz bilan",
      image: "https://media.istockphoto.com/id/876663348/photo/puff-pastries-with-meat-traditional-uzbek-and-indian-pasrty.jpg?s=612x612&w=0&k=20&c=fglFPwzec2uxxuZWa0QcpXEhtlZdclj_lxIUc0Q1uIM=",
      category: "breakfast",
    },
    {
      id: 5,
      name: "Choy",
      price: "5,000",
      description: "Issiq qora choy, shakar bilan",
      image: "https://media.istockphoto.com/id/1289115859/photo/fresh-bok-choy-or-pak-choi.jpg?s=612x612&w=0&k=20&c=u2AGXz8gn_zcPiY-gMa6OUAbW1t8w8pP8n0pY6-ckao=",
      category: "drinks",
    },
    {
      id: 6,
      name: "Halva",
      price: "15,000",
      description: "An'anaviy o'zbek halvasi",
      image: "https://media.istockphoto.com/id/1256978725/photo/moong-dal-halwa-or-mung-daal-halva-is-an-indian-sweet-dessert-recipe-garnished-with-dry-fruits.jpg?s=612x612&w=0&k=20&c=3C3TzD6l28y9C_AlobiVHPAsIaNR6xE6rRIGITFepuA=",
      category: "desserts",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

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
            {filteredItems.map((item) => (
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
