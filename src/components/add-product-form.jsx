import { useState } from 'react';
import styles from '../styles/form-styles.module.css';

export function AddProductForm({ onAddProduct, onCancel }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price || !stock) {
      alert("Barcha maydonlar to'ldirilishi shart!");
      return;
    }
    onAddProduct({ name, category, price, stock });
    setName('');
    setCategory('');
    setPrice('');
    setStock('');
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Yangi Mahsulot Qo'shish</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="productName" className={styles.formLabel}>Nomi:</label>
          <input
            type="text"
            id="productName"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productCategory" className={styles.formLabel}>Kategoriya:</label>
          <input
            type="text"
            id="productCategory"
            className={styles.formInput}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productPrice" className={styles.formLabel}>Narxi:</label>
          <input
            type="number"
            id="productPrice"
            className={styles.formInput}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productStock" className={styles.formLabel}>Omborda:</label>
          <input
            type="number"
            id="productStock"
            className={styles.formInput}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>Qo'shish</button>
          <button type="button" onClick={onCancel} className={styles.cancelButton}>Bekor qilish</button>
        </div>
      </form>
    </div>
  );
}
