import { useState } from 'react';
import styles from '../styles/form-styles.module.css';

export function AddUserForm({ onAddUser, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Viewer');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Ism va Email maydonlari to'ldirilishi shart!");
      return;
    }
    onAddUser({ name, email, role, status });
    setName('');
    setEmail('');
    setRole('Viewer');
    setStatus('Active');
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Yangi Foydalanuvchi Qo'shish</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Ism:</label>
          <input
            type="text"
            id="name"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email:</label>
          <input
            type="email"
            id="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.formLabel}>Rol:</label>
          <select
            id="role"
            className={styles.formSelect}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.formLabel}>Holat:</label>
          <select
            id="status"
            className={styles.formSelect}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>Qo'shish</button>
          <button type="button" onClick={onCancel} className={styles.cancelButton}>Bekor qilish</button>
        </div>
      </form>
    </div>
  );
}
