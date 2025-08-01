import "../styles/about.css"

const About = () => {
  const stats = [
    { number: "8+", label: "Yillik tajriba" },
    { number: "15", label: "Professional oshpaz" },
    { number: "1000+", label: "Mamnun mijozlar" },
    { number: "100%", label: "Halol mahsulotlar" },
  ]

  const testimonials = [
    {
      name: "Aziz Karimov",
      location: "Toshkent",
      text: "Eng yaxshi restoran! Taomlar juda mazali va xizmat a'lo darajada.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Malika Tosheva",
      location: "Samarqand",
      text: "O'zbek oshi juda mazali edi. Albatta yana kelaman!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Bobur Aliyev",
      location: "Buxoro",
      text: "Professional xizmat va ajoyib muhit. Tavsiya qilaman!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>Bizning hikoyamiz</h1>
              <p>
                2015 yildan beri biz mijozlarimizga eng sifatli va mazali taomlarni taklif etib kelmoqdamiz. Bizning
                maqsadimiz - har bir mijozni xursand qilish va unutilmas ta'm tajribasini yaratish.
              </p>
              <p>
                Professional oshpazlarimiz an'anaviy o'zbek taomlarini zamonaviy uslubda tayyorlaydi. Har bir taom sevgi
                va e'tibor bilan pishiriladi.
              </p>
            </div>
            <div className="about-image">
              <img src="/placeholder.svg?height=500&width=600" alt="Restoran" />
              <div className="about-card">
                <h4>Bizning oshpazlarimiz</h4>
                <p>Har kuni yangi va mazali taomlar tayyorlaydi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img src="/placeholder.svg?height=400&width=500" alt="Oshxona" />
            </div>
            <div className="mission-text">
              <h2>Bizning missiyamiz</h2>
              <p>
                Biz har bir mijozga eng yaxshi xizmat ko'rsatish va sifatli taomlar taklif qilishni o'zimizga maqsad
                qilganmiz. Bizning jamoamiz doimo mijozlar ehtiyojlarini birinchi o'ringa qo'yadi.
              </p>
              <div className="mission-features">
                <div className="mission-feature">
                  <span className="feature-icon">✅</span>
                  <span>Sifatli mahsulotlar</span>
                </div>
                <div className="mission-feature">
                  <span className="feature-icon">✅</span>
                  <span>Professional xizmat</span>
                </div>
                <div className="mission-feature">
                  <span className="feature-icon">✅</span>
                  <span>Qulay narxlar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mijozlarimiz fikri</h2>
            <p className="section-description">Bizning xizmatlarimiz haqida mijozlar fikri</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
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

export default About
