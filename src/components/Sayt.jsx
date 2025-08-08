import { Search } from 'lucide-react';
import { useState } from 'react';
import styles from '../styles/sayt.module.css'; // Import CSS Module

export function Sayt() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <form>
          <div className={styles.searchInputWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Qidirish..."
              className={styles.searchInput}
            />
          </div>
        </form>
      </div>
      <div className={styles.dropdownMenu}>
        <button className={styles.avatarButton} onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img src="/placeholder-user.jpg?height=32&width=32&query=user avatar" alt="Avatar" className={styles.avatarImage} />
          <span className={styles.srOnly}>Foydalanuvchi menyusini ochish</span>
        </button>
        {dropdownOpen && (
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownItem}>Profil</div>
            <div className={styles.dropdownItem}>Sozlamalar</div>
            <div className={styles.dropdownSeparator}></div>
            <div className={styles.dropdownItem}>Chiqish</div>
          </div>
        )}
      </div>
    </header>
  );
}
