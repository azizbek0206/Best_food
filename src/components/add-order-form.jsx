import { useState } from 'react';
import styles from '../styles/form-styles.module.css';

export function AddOrderForm({ onAddOrder, onCancel }) {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Kutilmoqda');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !amount || !status || !date) {
      alert("Barcha maydonlar to'ldirilishi shart!");
      return;
    }
    onAddOrder({ customer, amount, status, date });
    setCustomer('');
    setAmount('');
    setStatus('Kutilmoqda');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Yangi Buyurtma Qo'shish</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="customer" className={styles.formLabel}>Mijoz:</label>
          <input
            type="text"
            id="customer"
            className={styles.formInput}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.formLabel}>Miqdor:</label>
          <input
            type="number"
            id="amount"
            className={styles.formInput}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="orderStatus" className={styles.formLabel}>Holat:</label>
          <select
            id="orderStatus"
            className={styles.formSelect}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Kutilmoqda">Kutilmoqda</option>
            <option value="Yetkazilgan">Yetkazilgan</option>
            <option value="Bekor qilingan">Bekor qilingan</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="orderDate" className={styles.formLabel}>Sana:</label>
          <input
            type="date"
            id="orderDate"
            className={styles.formInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
