import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">Bistro Bliss</span>
            </Link>
            <p>Eng mazali taomlar va sifatli xizmat - bizning maqsadimiz!</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Tezkor havolalar</h4>
            <ul>
              <li><Link to="/">Bosh sahifa</Link></li>
              <li><Link to="/about">Biz haqimizda</Link></li>
              <li><Link to="/menu">Menyu</Link></li>
              <li><Link to="/contact">Aloqa</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Xizmatlar</h4>
            <ul>
              <li><a href="#">Yetkazib berish</a></li>
              <li><a href="#">Bron qilish</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Tadbirlar</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Aloqa</h4>
            <div className="footer-contact">
              <p>📍 Toshkent, Chilonzor</p>
              <p>📞 +998 90 123 45 67</p>
              <p>📧 info@bistrobliss.uz</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Bistro Bliss. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
