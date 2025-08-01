"use client"

import { useState } from "react"
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Biz bilan bog'laning</h1>
          <p className="contact-description">Savollaringiz bormi? Biz bilan bog'laning!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Aloqa ma'lumotlari</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Manzil</h4>
                    <p>Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 1-uy</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Telefon</h4>
                    <p>+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@bistrobliss.uz</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4>Ish vaqti</h4>
                    <p>Har kuni: 09:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Xabar yuborish</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ismingiz"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email manzilingiz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon raqamingiz"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Xabaringiz"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary full-width">
                  Xabar yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Bizning joylashuvimiz</h2>
          <div className="map-placeholder">
            <p>🗺️ Xarita bu yerda ko'rsatiladi</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
